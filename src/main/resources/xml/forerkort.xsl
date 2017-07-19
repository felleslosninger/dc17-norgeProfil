<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fk="urn:fdc:difi.no:2017:AlleForerkort:v1" exclude-result-prefixes="fk">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no"/>

    <xsl:template match="fk:AlleForerkort">
        <xsl:apply-templates select="fk:Forerkort">
            <xsl:sort select="fk:Forerkort/fk:Navn"/>
        </xsl:apply-templates>
    </xsl:template>


    <xsl:template match="fk:AlleForerkort/fk:Forerkort">
        <div>
            <ul>
                <li>
                    <xsl:value-of select="fk:Klasse"/>
                </li>
                <li>
                    <xsl:value-of select="fk:Navn"/>
                </li>
                <li>
                    <xsl:value-of select="fk:Gyldighet"/>
                </li>
            </ul>
        </div>
    </xsl:template>

</xsl:stylesheet>