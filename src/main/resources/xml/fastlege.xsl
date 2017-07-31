<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fs="urn:fdc:difi.no:2017:fastlege:v1" exclude-result-prefixes="fs">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:template match="fs:Fastlege">
        <div>
            <div><h4><b>Nåværende fastlege:</b></h4></div>
            <div><b>Navn: </b><xsl:value-of select="fs:Person/fs:Navn"/></div>
            <div><b>Telefonnummer: </b><xsl:value-of select="fs:Legesenter/fs:Telefonnummer"/></div>
            <a href="{fs:Legesenter/fs:Nettside}">Hjemmeside</a>
        </div>
    </xsl:template>

</xsl:stylesheet>