import React from "react";
import { Header, Item, List } from "semantic-ui-react";

const Water = () => {
  return (
    <div className="page-contain">
      <Header as="h1" className="page-title">
        Environmental Indicators
      </Header>
      <Header className="page-subtitle" as="h2">
        Water
        <Header.Subheader>
          Some drinking water contaminants are harmful to human health but do
          not cause any noticeable changes to the taste, smell, or color of the
          water. NC ENVIROSCAN visualizes select measures of pollution in
          drinking water in North Carolina.
        </Header.Subheader>
      </Header>

      <Item>
        <Item.Content>
          <Item.Header style={{ fontWeight: "bold" }}>
            Private Well Water
          </Item.Header>
          <Item.Description>
            When contaminants enter groundwater they can influence the quality
            and safety of drinking water drawn from private wells and
            potentially impact human health.
          </Item.Description>
        </Item.Content>
      </Item>

      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header style={{ fontWeight: "bold" }}>
              Which environmental indicators can I explore?
            </Item.Header>
            <Item.Description>
              In the <a href="https://enviroscan-map.renci.org/" target="_blank" rel="noreferrer">ENVIROSCAN mapping tool</a>
              we provide data on toxic metals, including arsenic, cadmium, lead
              and manganese, that have been documented in private well water in
              North Carolina.
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header style={{ fontWeight: "bold" }}>
              Why are we concerned about these toxic metals?
            </Item.Header>
            <Item.Description>
              We are focusing on these metals because of their known human
              health risks.
              <List bulleted>
                <List.Item>
                  <strong>Arsenic</strong> exposure has been linked to many health problems, such
                  as cancer (bladder, lung and skin), diabetes, heart and lung
                  disease, liver and kidney damage, impaired cognitive
                  development in children, and skin lesions.
                  <List.List>
                    <List.Header>For more information</List.Header>
                    <List.Item>The Agency for Toxic Substances & Disease Registry has more information on arsenic and associated health risks. <a href='https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=19&toxid=3' target="_blank" rel="noreferrer">ToxFAQ</a> <a href='https://www.atsdr.cdc.gov/toxfaqs/tfacts2.pdf' target="_blank" rel="noreferrer">(pdf)</a></List.Item>
                    <List.Item><a href="https://epi.dph.ncdhhs.gov/oee/docs/ProtectYourselfArsenicWellWater.pdf" target="_blank" rel="noreferrer">Protect Yourself from Arsenic in Well Water</a> (NC Department of Health & Human Services)</List.Item>
                    <List.Item>Map arsenic contamination in private well water</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  <strong>Cadmium</strong> is associated with vomiting and diarrhea if ingested
                  in high amounts over a short amount of time. Exposure to
                  cadmium in drinking water over long periods can damage your
                  bones, kidneys and lungs.
                  <List.List>
                    <List.Header>For more information</List.Header>
                    <List.Item>The Agency for Toxic Substances & Disease Registry has more information on cadmium and associated health risks. <a href='https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=47&toxid=15' target="_blank" rel="noreferrer">ToxFAQ</a> <a href='https://www.atsdr.cdc.gov/toxfaqs/tfacts5.pdf' target="_blank" rel="noreferrer">(pdf)</a></List.Item>
                    <List.Item><a href="https://epi.dph.ncdhhs.gov/oee/docs/CadmiumAndPrivateWells.pdf" target="_blank" rel="noreferrer">Cadmium & Private Wells</a> (NC Department of Health & Human Services</List.Item>
                    <List.Item>Map cadmium contamination in private well water</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  <strong>Lead</strong> exposure is harmful to children and adults, and is linked
                  with kidney and brain damage, including reduced IQ and
                  learning disabilities, and other health problems such as
                  anemia and high blood pressure in older adults.
                  <List.List>
                    <List.Header>For more information</List.Header>
                    <List.Item>The Agency for Toxic Substances & Disease Registry has more information on lead and associated health risks. <a href='https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=93&toxid=22' target="_blank" rel="noreferrer">ToxFAQ</a> <a href='https://www.atsdr.cdc.gov/toxfaqs/tfacts13.pdf' target="_blank" rel="noreferrer">(pdf)</a></List.Item>
                    <List.Item><a href="https://epi.dph.ncdhhs.gov/oee/docs/LeadAndPrivateWells.pdf" target="_blank" rel="noreferrer">Lead & Private Wells</a> (NC Department of Health & Human Services</List.Item>
                    <List.Item>Map lead contamination in private well water</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  <strong>Manganese</strong> is an essential element that is required in small
                  amounts to stay healthy. However, too much manganese may cause
                  neurological effects in vulnerable populations such as
                  infants, children and pregnant women. Studies in children have
                  suggested that extremely high levels of manganese exposure may
                  affect brain development.
                  <List.List>
                    <List.Header>For more information</List.Header>
                    <List.Item>The Agency for Toxic Substances & Disease Registry has more information on manganese and associated health risks. <a href='https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=101&toxid=23' target="_blank" rel="noreferrer">ToxFAQ</a></List.Item>
                    <List.Item>Manganese Fact Sheet (NC Department of Health and Human Services)</List.Item>
                    <List.Item>Map manganese contamination in private well water</List.Item>
                  </List.List>
                </List.Item>
              </List>
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header style={{ fontWeight: "bold" }}>
              How do we map the data?
            </Item.Header>
            <Item.Description>
              In ENVIROSCAN, we currently provide data as median, mean, or
              percent above standard at the US Census tract level. Standards
              align with federal or state regulations as required and are as
              follows:
              <List bulleted>
                <List.Item>
                  Arsenic, 10 ppb (EPA Maximum Contaminant Level)
                </List.Item>
                <List.Item>
                  Cadmium, 5 pbb (EPA Maximum Contaminant Level)
                </List.Item>
                <List.Item>
                  Lead, 15 ppb (EPA Treatment Technique Action Level)
                </List.Item>
                <List.Item>
                  Manganese, 50 ppb (EPA Secondary Maximum Contaminant Level)
                </List.Item>
              </List>
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header style={{ fontWeight: "bold" }}>
              When and where were these data collected?
            </Item.Header>
            <Item.Description>
              The toxic metals data used in ENVIROSCAN comprise well water test
              results from 1998-2019 retrieved from an electronic database
              maintained by the NC Division of Public Health (DPH) State
              Laboratory of Public Health. Household well water samples were
              collected by the NCDHHS DPH State Laboratory of Public Health and
              Epidemiology Section which provides groundwater monitoring
              assistance to North Carolina homeowners.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}

export default Water;