<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fs="urn:fdc:difi.no:2017:traffic:v1" exclude-result-prefixes="fs">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

    <xsl:template match="fs:Traffic">
        <xsl:for-each select="fs:DrivingLicence">
            <div> <xsl:value-of select="fs:header"/> </div>
            <div> <xsl:value-of select="fs:actor"/></div>
            <div> <xsl:value-of select="fs:description"/></div>
            <a href="{fs:link}"> Hjemmeside </a>
        </xsl:for-each>

        <xsl:for-each select="fs:DrivingLearning">
            <div> <xsl:value-of select="fs:header"/></div>
            <div> <xsl:value-of select="fs:actor"/> </div>
            <div> <xsl:value-of select="fs:description"/></div>
            <xsl:if test="fs:link">
                <a href="{fs:link}"> Hjemmeside </a>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>