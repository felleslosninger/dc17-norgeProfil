<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:hs="urn:fdc:difi.no:2017:kjoretoy:v1" exclude-result-prefixes="hs">

    <xsl:template match="hs:kjoretoy">
        <xsl:value-of select="hs:bil"/>
    </xsl:template>
</xsl:stylesheet>