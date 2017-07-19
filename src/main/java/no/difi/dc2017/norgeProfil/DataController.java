package no.difi.dc2017.norgeProfil;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.sf.saxon.s9api.*;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.stream.StreamSource;
import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "/data")
public class DataController {

    private XsltCompiler xsltCompiler;

    private Map<String, XsltExecutable> xsltExecutables = new HashMap<>();

    private ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void postConstruct() {
        xsltCompiler = new Processor(false).newXsltCompiler();
    }


    @ResponseBody
    @RequestMapping(value = "/{key}", method = RequestMethod.GET)
    public void getFastlege(@PathVariable String key, @RequestParam(required = false) String callback, HttpServletResponse response)
            throws IOException, SaxonApiException {
        // Verify existence of XSLT executable for requested presentation.
        if (!xsltExecutables.containsKey(key)) {

            // Generate missing XSLT executable.
            try (InputStream inputStream = getClass().getResourceAsStream(String.format("/xml/%s.xsl", key))) {
                xsltExecutables.put(key, xsltCompiler.compile(new StreamSource(inputStream)));
            }
        }

        // Prepare destination for Saxon returning XML in XDM (Saxon internal format).
        XdmDestination xdmDestination = new XdmDestination();

        // Perform parsing of data to prepared destination.
        try (InputStream inputStream = getClass().getResourceAsStream(String.format("/xml/%s-data.xml", key))) {
            XsltTransformer xsltTransformer = xsltExecutables.get(key).load();
            xsltTransformer.setSource(new StreamSource(inputStream));
            xsltTransformer.setDestination(xdmDestination);
            xsltTransformer.transform();
            xsltTransformer.close();
        }

        // Add content-type for JSONP.
        response.setContentType("application/javascript");

        // Output transformer result in destionation using the JSON mapper for proper parsing.
        try (Writer writer = response.getWriter()) {
            if (callback != null)
                writer.append(String.format("%s(", callback));

            writer.append(objectMapper.writeValueAsString(xdmDestination.getXdmNode().toString()));

            if (callback != null)
                writer.append(");");
        }
    }
}
