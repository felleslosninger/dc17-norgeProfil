<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fa="urn:fdc:difi.no:2017:Adresse:v1" exclude-result-prefixes="fa">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:template match="fa:Adresse">
        <div>
            <div>Gate: <xsl:value-of select="fa:Gate"/></div>
            <div>Poststed: <xsl:value-of select="fa:Post"/> </div>
            <div>Fylke: <xsl:value-of select="fa:Fylke"/></div>
        </div>
    </xsl:template>

</xsl:stylesheet>