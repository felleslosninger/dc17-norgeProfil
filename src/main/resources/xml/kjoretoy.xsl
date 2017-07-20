<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ns="urn:fdc:difi.no:2017:kjoretoy:v1" exclude-result-prefixes="ns">
        <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

        <xsl:template match="ns:kjoretoy">
            <xsl:for-each select="ns:bil">
                <xsl:value-of select="ns:eier/ns:fornavn"/>
                <xsl:if test="ns:eier/ns:mellomnavn">
                    <xsl:value-of select="ns:eier/ns:mellomnavn"/>
                </xsl:if>
                <xsl:value-of select="ns:eier/ns:etternavn"/>
                <xsl:value-of select="ns:eukontroll/ns:status"/>
            </xsl:for-each>
        </xsl:template>
</xsl:stylesheet>