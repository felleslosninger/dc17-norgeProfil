<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fk="urn:fdc:difi.no:2017:AlleForerkort:v1" exclude-result-prefixes="fk">

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no"/>

    <xsl:template match="fk:AlleForerkort">
        <div><h4><b>Dine førerkort:</b></h4></div>
        <xsl:apply-templates select="fk:Forerkort">
            <xsl:sort select="fk:Forerkort/fk:Navn"/>
        </xsl:apply-templates>
    </xsl:template>


    <xsl:template match="fk:AlleForerkort/fk:Forerkort">
        <div style="display: inline-block; margin-right:25px;">
            <div>
                <b>Klasse: </b> <xsl:value-of select="fk:Klasse"/>
            </div>
            <div>
                <b>Type: </b> <xsl:value-of select="fk:Navn"/>
            </div>
            <div>
                <b>Gyldig til: </b> <xsl:value-of select="fk:Gyldighet"/>

            </div>
        </div>
    </xsl:template>

</xsl:stylesheet>