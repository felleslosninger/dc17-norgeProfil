<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fk="urn:fdc:difi.no:2017:forerkort:v1" exclude-result-prefixes="fk">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no"/>

    <xsl:template match="/fk:Forerkort">
        <div>
            <div><xsl:value-of select="fk:Klasse"/> </div>
            <div><xsl:value-of select="fk:Navn"/> </div>
            <div><xsl:value-of select="fk:Gyldighet"/></div>
        </div>

    </xsl:template>

</xsl:stylesheet>