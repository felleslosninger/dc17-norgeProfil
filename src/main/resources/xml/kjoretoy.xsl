<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ns="urn:fdc:difi.no:2017:transportmiddel:v1" exclude-result-prefixes="ns">
        <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="no" />

        <xsl:template match="/">
            <html>
                <body>
                    <h1> Kjøretoy </h1>
                    <xsl:apply-templates/>
                </body>
            </html>
        </xsl:template>

        <xsl:template match="ns:transportmiddel/ns:kjoretoy">
            <xsl:apply-templates select="ns:eier"/>

            <p>
                <h2><xsl:text>Kjøretøy </xsl:text></h2>
                <xsl:text>idnummer</xsl:text>
                <xsl:value-of select="ns:opplysninger/ns:idnummer"/>
                <xsl:text> </xsl:text>
                <xsl:apply-templates select="ns:bil/ns:eukontroll"/>
            </p>
            <p>
                <xsl:apply-templates select="ns:opplysninger"/>
                <xsl:text> </xsl:text>
                <xsl:apply-templates select="ns:bil"/>
            </p>
        </xsl:template>

        <xsl:template match="ns:transportmiddel/ns:kjoretoy/ns:eier">
            <h2>
                <xsl:value-of select="ns:fornavn"/>
                <xsl:text> </xsl:text>
                <xsl:if test="ns:mellomnavn">
                    <xsl:value-of select="ns:mellomnavn"/>
                </xsl:if>
                <xsl:text> </xsl:text>
                <xsl:value-of select="ns:etternavn"/>
            </h2>
        </xsl:template>

        <xsl:template match="ns:transportmiddel/ns:kjoretoy/ns:opplysninger">
            <table>
                <th>
                    <tr>
                        <xsl:text> Klasse: </xsl:text>
                        <xsl:choose>
                            <xsl:when test="ns:klasse/ns:tall">
                                <xsl:value-of select="ns:klasse/ns:tall"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="ns:klasse/ns:bokstav"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </tr>
                    <tr>
                        <xsl:text> Registrering: </xsl:text>
                        <xsl:value-of select="ns:registrering"/>
                    </tr>
                </th>
                <th>
                    <tr>
                        <xsl:text> Fasong: </xsl:text>
                        <xsl:value-of select="ns:fasong"/>
                    </tr>
                    <tr>
                        <xsl:text> Seter: </xsl:text>
                        <xsl:value-of select="ns:seter"/>
                    </tr>
                </th>
                <th>
                    <tr>
                        <xsl:text>Drivstoff: </xsl:text>
                      <xsl:value-of select="ns:utslipp/ns:drivstoff"/>
                    </tr>
                    <xsl:if test="ns:utslipp/ns:volum">
                        <tr>
                            <xsl:text>Volum:</xsl:text>
                            <xsl:value-of select="ns:utslipp/ns:effekt/ns:mengde"/>
                            <xsl:value-of select="ns:utslipp/ns:effekt/ns:maaleenhet"/>
                        </tr>
                    </xsl:if>
                    <xsl:if test="ns:utslipp/ns:effekt">
                        <tr>
                            <xsl:text>Effekt:</xsl:text>
                            <xsl:value-of select="ns:utslipp/ns:effekt/ns:mengde"/>
                            <xsl:value-of select="ns:utslipp/ns:effekt/ns:maaleenhet"/>
                        </tr>
                    </xsl:if>
                </th>
            </table>
        </xsl:template>

        <xsl:template match="ns:transportmiddel/ns:kjoretoy/ns:bil">
            <xsl:value-of select="ns:kmstand"/>
            <xsl:value-of select="ns:avgasskrav"/>
            <xsl:value-of select="ns:girtype"/>
            <xsl:value-of select="ns:personbilsegment"/>
            <xsl:value-of select="ns:hjuldrift"/>
            <xsl:value-of select="ns:antiskrens"/>
            <xsl:value-of select="ns:karosseri"/>
            <xsl:if test="ns:tilhengervekt">
                <xsl:value-of select="ns:tilhengervekt/ns:mengde"/>
                <xsl:value-of select="ns:tilhengervekt/ns:maaleenhet"/>
            </xsl:if>
        </xsl:template>

        <xsl:template match="ns:transportmiddel/ns:kjoretoy/ns:bil/ns:eukontroll">
            <h3>Eukontroll: </h3>
            <xsl:value-of select="ns:status"/>
            <xsl:if test="ns:betalingsdato">
                <xsl:text> </xsl:text>
                <xsl:value-of select="ns:belop/ns:antall"/>
                <xsl:value-of select="ns:belop/ns:maaleenhet"/>
                <xsl:text> den </xsl:text>
                <xsl:value-of select="ns:betalingsdato/ns:dag"/>
                <xsl:text>/</xsl:text>
                <xsl:value-of select="ns:betalingsdato/ns:maaned"/>
                <xsl:text>/</xsl:text>
                <xsl:value-of select="ns:betalingsdato/ns:aar"/>
            </xsl:if>
        </xsl:template>
</xsl:stylesheet>