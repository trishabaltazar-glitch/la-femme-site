const IMAGE_BASE =
  'https://www.lafemmefashion.com/sites/default/files/styles/dress_315x500/public/dresses_images/';

const images = {
  cloud: {
    src: `${IMAGE_BASE}cloud-blue-prom-dress-1-33812.jpg?itok=ZWMdZC-2`,
    alt: 'Cloud blue La Femme dress',
  },
  pink: {
    src: `${IMAGE_BASE}bubblegum-pink-prom-dress-1-33355.jpg?itok=c3zaRtAf`,
    alt: 'Bubblegum pink La Femme dress',
  },
  copper: {
    src: `${IMAGE_BASE}copper-prom-dress-1-33417.jpg?itok=-5OvtYzh`,
    alt: 'Copper La Femme dress',
  },
  ice: {
    src: `${IMAGE_BASE}ice-blue-prom-dress-1-33373.jpg?itok=NCYDweR2`,
    alt: 'Ice blue La Femme dress',
  },
  peach: {
    src: `${IMAGE_BASE}peach-prom-dress-1-33863.jpg?itok=BLOPoMz5`,
    alt: 'Peach La Femme dress',
  },
};

const navItems = [
  ['Prom Dresses', 'index.html#collections', true],
  ['Mother of the Bride', 'index.html#collections', true],
  ['Homecoming', 'index.html#collections', true],
  ['Plus Size', 'index.html#collections', true],
  ['Evening Dresses', 'index.html#collections', true],
  ['Contact Us', 'contact.html'],
  ['Where to Buy', 'store-locator.html'],
];

const locatorMenuMarkup = `
  <details class="where-to-buy-menu">
    <summary>
      <a class="locator-nav-link" href="store-locator.html">Store Locator</a>
      <button class="locator-menu-toggle" type="button" aria-label="Open store locator menu" aria-expanded="false"><span aria-hidden="true"></span></button>
    </summary>
    <div class="where-to-buy-links" aria-label="Store locator locations">
      <div class="mega-menu-rail">
        <div class="country-rail" aria-label="Countries">
          <button type="button" data-country-trigger="US" aria-controls="store-locator-united-states" aria-selected="true">United States</button>
          <button type="button" data-country-trigger="AU" aria-controls="store-locator-australia" aria-selected="false">Australia</button>
          <button type="button" data-country-trigger="CA" aria-controls="store-locator-canada" aria-selected="false">Canada</button>
        </div>
      </div>
      <div class="mega-menu-city-panel">
        <div class="mega-country-panel" id="store-locator-united-states" data-country-panel="US">
          <div class="mega-state-grid">
            <section class="mega-state-group">
              <h3>Alabama</h3>
              <div class="mega-city-list">
                <a href="stores/alabaster-al.html">Alabaster</a>
                <a href="stores/anniston-al.html">Anniston</a>
                <a href="stores/birmingham-al.html">Birmingham</a>
                <a href="stores/eufaula-al.html">Eufaula</a>
                <a href="stores/florence-al.html">Florence</a>
                <a href="stores/foley-al.html">Foley</a>
                <a href="stores/fort-payne-al.html">Fort Payne</a>
                <a href="stores/fyffe-al.html">Fyffe</a>
                <a href="stores/gadsden-al.html">Gadsden</a>
                <a href="stores/hartselle-al.html">Hartselle</a>
                <a href="stores/hoover-al.html">Hoover</a>
                <a href="stores/huntsville-al.html">Huntsville</a>
                <a href="stores/jasper-al.html">Jasper</a>
                <a href="stores/mobile-al.html">Mobile</a>
                <a href="stores/montgomery-al.html">Montgomery</a>
                <a href="stores/muscle-shoals-al.html">Muscle Shoals</a>
                <a href="stores/oxford-al.html">Oxford</a>
                <a href="stores/pell-city-al.html">Pell City</a>
                <a href="stores/ranburne-al.html">Ranburne</a>
                <a href="stores/trussville-al.html">Trussville</a>
                <a href="stores/tuscaloosa-al.html">Tuscaloosa</a>
                <a href="stores/tuscumbia-al.html">Tuscumbia</a>
                <a href="stores/wetumpka-al.html">Wetumpka</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Arizona</h3>
              <div class="mega-city-list">
                <a href="stores/nogales-az.html">Nogales</a>
                <a href="stores/phoenix-az.html">Phoenix</a>
                <a href="stores/scottsdale-az.html">Scottsdale</a>
                <a href="stores/somerton-az.html">Somerton</a>
                <a href="stores/tucson-az.html">Tucson</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Arkansas</h3>
              <div class="mega-city-list">
                <a href="stores/bay-ar.html">Bay</a>
                <a href="stores/clarksville-ar.html">Clarksville</a>
                <a href="stores/fayetteville-ar.html">Fayetteville</a>
                <a href="stores/fort-smith-ar.html">Fort Smith</a>
                <a href="stores/jacksonville-ar.html">Jacksonville</a>
                <a href="stores/little-rock-ar.html">Little Rock</a>
                <a href="stores/marion-ar.html">Marion</a>
                <a href="stores/rogers-ar.html">Rogers</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>California</h3>
              <div class="mega-city-list">
                <a href="stores/belmont-ca.html">Belmont</a>
                <a href="stores/brentwood-ca.html">Brentwood</a>
                <a href="stores/campbell-ca.html">Campbell</a>
                <a href="stores/canoga-park-ca.html">Canoga Park</a>
                <a href="stores/castro-valley-ca.html">Castro Valley</a>
                <a href="stores/chula-vista-ca.html">Chula Vista</a>
                <a href="stores/concord-ca.html">Concord</a>
                <a href="stores/costa-mesa-ca.html">Costa Mesa</a>
                <a href="stores/del-mar-ca.html">Del Mar</a>
                <a href="stores/el-dorado-hills-ca.html">El Dorado Hills</a>
                <a href="stores/folsom-ca.html">Folsom</a>
                <a href="stores/fresno-ca.html">Fresno</a>
                <a href="stores/grover-beach-ca.html">Grover Beach</a>
                <a href="stores/la-mesa-ca.html">La Mesa</a>
                <a href="stores/los-angeles-ca.html">Los Angeles</a>
                <a href="stores/modesto-ca.html">Modesto</a>
                <a href="stores/pleasanton-ca.html">Pleasanton</a>
                <a href="stores/santa-cruz-ca.html">Santa Cruz</a>
                <a href="stores/santa-rosa-ca.html">Santa Rosa</a>
                <a href="stores/sonora-ca.html">Sonora</a>
                <a href="stores/tustin-ca.html">Tustin</a>
                <a href="stores/visalia-ca.html">Visalia</a>
                <a href="stores/walnut-creek-ca.html">Walnut Creek</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Colorado</h3>
              <div class="mega-city-list">
                <a href="stores/centennial-co.html">Centennial</a>
                <a href="stores/colorado-springs-co.html">Colorado Springs</a>
                <a href="stores/erie-co.html">Erie</a>
                <a href="stores/fort-collins-co.html">Fort Collins</a>
                <a href="stores/grand-junction-co.html">Grand Junction</a>
                <a href="stores/littleton-co.html">Littleton</a>
                <a href="stores/lone-tree-co.html">Lone Tree</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Connecticut</h3>
              <div class="mega-city-list">
                <a href="stores/danbury-ct.html">Danbury</a>
                <a href="stores/danielson-ct.html">Danielson</a>
                <a href="stores/farmington-ct.html">Farmington</a>
                <a href="stores/milford-ct.html">Milford</a>
                <a href="stores/rocky-hill-ct.html">Rocky Hill</a>
                <a href="stores/sandy-hook-ct.html">Sandy Hook</a>
                <a href="stores/stamford-ct.html">Stamford</a>
                <a href="stores/trumbull-ct.html">Trumbull</a>
                <a href="stores/wallingford-ct.html">Wallingford</a>
                <a href="stores/west-hartford-ct.html">West Hartford</a>
                <a href="stores/west-haven-ct.html">West Haven</a>
                <a href="stores/westport-ct.html">Westport</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Delaware</h3>
              <div class="mega-city-list">
                <a href="stores/newark-de.html">Newark</a>
                <a href="stores/wilmington-de.html">Wilmington</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>District of Columbia</h3>
              <div class="mega-city-list">
                <a href="stores/washington-dc.html">Washington</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Florida</h3>
              <div class="mega-city-list">
                <a href="stores/bal-harbour-fl.html">Bal Harbour</a>
                <a href="stores/boca-raton-fl.html">Boca Raton</a>
                <a href="stores/bonita-springs-fl.html">Bonita Springs</a>
                <a href="stores/boynton-beach-fl.html">Boynton Beach</a>
                <a href="stores/bradenton-fl.html">Bradenton</a>
                <a href="stores/brooksville-fl.html">Brooksville</a>
                <a href="stores/clearwater-fl.html">Clearwater</a>
                <a href="stores/coral-gables-fl.html">Coral Gables</a>
                <a href="stores/coral-springs-fl.html">Coral Springs</a>
                <a href="stores/davie-fl.html">Davie</a>
                <a href="stores/fort-lauderdale-fl.html">Fort Lauderdale</a>
                <a href="stores/fort-myers-fl.html">Fort Myers</a>
                <a href="stores/fort-walton-beach-fl.html">Fort Walton Beach</a>
                <a href="stores/gainesville-fl.html">Gainesville</a>
                <a href="stores/hialeah-fl.html">Hialeah</a>
                <a href="stores/homestead-fl.html">Homestead</a>
                <a href="stores/jacksonville-fl.html">Jacksonville</a>
                <a href="stores/jacksonville-beach-fl.html">Jacksonville Beach</a>
                <a href="stores/jupiter-fl.html">Jupiter</a>
                <a href="stores/land-o-lakes-fl.html">Land O Lakes</a>
                <a href="stores/melbourne-fl.html">Melbourne</a>
                <a href="stores/miami-fl.html">Miami</a>
                <a href="stores/milton-fl.html">Milton</a>
                <a href="stores/naples-fl.html">Naples</a>
                <a href="stores/north-fort-myers-fl.html">North Fort Myers</a>
                <a href="stores/orlando-fl.html">Orlando</a>
                <a href="stores/oviedo-fl.html">Oviedo</a>
                <a href="stores/pace-fl.html">Pace</a>
                <a href="stores/palm-beach-gardens-fl.html">Palm Beach Gardens</a>
                <a href="stores/palm-harbor-fl.html">Palm Harbor</a>
                <a href="stores/pensacola-fl.html">Pensacola</a>
                <a href="stores/punta-gorda-fl.html">Punta Gorda</a>
                <a href="stores/sarasota-fl.html">Sarasota</a>
                <a href="stores/tallahassee-fl.html">Tallahassee</a>
                <a href="stores/tampa-fl.html">Tampa</a>
                <a href="stores/wellington-fl.html">Wellington</a>
                <a href="stores/wilton-manors-fl.html">Wilton Manors</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Georgia</h3>
              <div class="mega-city-list">
                <a href="stores/adel-ga.html">Adel</a>
                <a href="stores/alpharetta-ga.html">Alpharetta</a>
                <a href="stores/athens-ga.html">Athens</a>
                <a href="stores/atlanta-ga.html">Atlanta</a>
                <a href="stores/augusta-ga.html">Augusta</a>
                <a href="stores/bainbridge-ga.html">Bainbridge</a>
                <a href="stores/buford-ga.html">Buford</a>
                <a href="stores/cartersville-ga.html">Cartersville</a>
                <a href="stores/douglasville-ga.html">Douglasville</a>
                <a href="stores/dublin-ga.html">Dublin</a>
                <a href="stores/elko-ga.html">Elko</a>
                <a href="stores/hartwell-ga.html">Hartwell</a>
                <a href="stores/kennesaw-ga.html">Kennesaw</a>
                <a href="stores/la-grange-ga.html">La Grange</a>
                <a href="stores/lilburn-ga.html">Lilburn</a>
                <a href="stores/monroe-ga.html">Monroe</a>
                <a href="stores/mt-pleasant-ga.html">Mt Pleasant</a>
                <a href="stores/peachtree-city-ga.html">Peachtree City</a>
                <a href="stores/perry-ga.html">Perry</a>
                <a href="stores/rome-ga.html">Rome</a>
                <a href="stores/statesboro-ga.html">Statesboro</a>
                <a href="stores/tallapoosa-ga.html">Tallapoosa</a>
                <a href="stores/thomasville-ga.html">Thomasville</a>
                <a href="stores/valdosta-ga.html">Valdosta</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Hawaii</h3>
              <div class="mega-city-list">
                <a href="stores/honolulu-hi.html">Honolulu</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Idaho</h3>
              <div class="mega-city-list">
                <a href="stores/boise-id.html">Boise</a>
                <a href="stores/idaho-falls-id.html">Idaho Falls</a>
                <a href="stores/pocatello-id.html">Pocatello</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Illinois</h3>
              <div class="mega-city-list">
                <a href="stores/alton-il.html">Alton</a>
                <a href="stores/aurora-il.html">Aurora</a>
                <a href="stores/barrington-il.html">Barrington</a>
                <a href="stores/batavia-il.html">Batavia</a>
                <a href="stores/belleville-il.html">Belleville</a>
                <a href="stores/champaign-il.html">Champaign</a>
                <a href="stores/chicago-il.html">Chicago</a>
                <a href="stores/crystal-lake-il.html">Crystal Lake</a>
                <a href="stores/galesburg-il.html">Galesburg</a>
                <a href="stores/geneva-il.html">Geneva</a>
                <a href="stores/highland-park-il.html">Highland Park</a>
                <a href="stores/lake-zurich-il.html">Lake Zurich</a>
                <a href="stores/lincolnwood-il.html">Lincolnwood</a>
                <a href="stores/litchfield-il.html">Litchfield</a>
                <a href="stores/mokena-il.html">Mokena</a>
                <a href="stores/oswego-il.html">Oswego</a>
                <a href="stores/plainfield-il.html">Plainfield</a>
                <a href="stores/quincy-il.html">Quincy</a>
                <a href="stores/schaumburg-il.html">Schaumburg</a>
                <a href="stores/springfield-il.html">Springfield</a>
                <a href="stores/worth-il.html">Worth</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Indiana</h3>
              <div class="mega-city-list">
                <a href="stores/evansville-in.html">Evansville</a>
                <a href="stores/fort-branch-in.html">Fort Branch</a>
                <a href="stores/hobart-in.html">Hobart</a>
                <a href="stores/hope-in.html">Hope</a>
                <a href="stores/indianapolis-in.html">Indianapolis</a>
                <a href="stores/kokomo-in.html">Kokomo</a>
                <a href="stores/peru-in.html">Peru</a>
                <a href="stores/rockport-in.html">Rockport</a>
                <a href="stores/whiting-in.html">Whiting</a>
                <a href="stores/zionsville-in.html">Zionsville</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Iowa</h3>
              <div class="mega-city-list">
                <a href="stores/atkins-ia.html">Atkins</a>
                <a href="stores/cedar-rapids-ia.html">Cedar Rapids</a>
                <a href="stores/cherokee-ia.html">Cherokee</a>
                <a href="stores/coralville-ia.html">Coralville</a>
                <a href="stores/davenport-ia.html">Davenport</a>
                <a href="stores/de-witt-ia.html">De Witt</a>
                <a href="stores/dubuque-ia.html">Dubuque</a>
                <a href="stores/manchester-ia.html">Manchester</a>
                <a href="stores/northwood-ia.html">Northwood</a>
                <a href="stores/oelwein-ia.html">Oelwein</a>
                <a href="stores/orange-city-ia.html">Orange City</a>
                <a href="stores/spencer-ia.html">Spencer</a>
                <a href="stores/urbandale-ia.html">Urbandale</a>
                <a href="stores/waterloo-ia.html">Waterloo</a>
                <a href="stores/west-des-moines-ia.html">West Des Moines</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Kansas</h3>
              <div class="mega-city-list">
                <a href="stores/manhattan-ks.html">Manhattan</a>
                <a href="stores/overland-park-ks.html">Overland Park</a>
                <a href="stores/pittsburg-ks.html">Pittsburg</a>
                <a href="stores/wichita-ks.html">Wichita</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Kentucky</h3>
              <div class="mega-city-list">
                <a href="stores/ashland-ky.html">Ashland</a>
                <a href="stores/danville-ky.html">Danville</a>
                <a href="stores/elizabethtown-ky.html">Elizabethtown</a>
                <a href="stores/glasgow-ky.html">Glasgow</a>
                <a href="stores/lexington-ky.html">Lexington</a>
                <a href="stores/louisville-ky.html">Louisville</a>
                <a href="stores/madisonville-ky.html">Madisonville</a>
                <a href="stores/prestonsburg-ky.html">Prestonsburg</a>
                <a href="stores/princeton-ky.html">Princeton</a>
                <a href="stores/west-paducah-ky.html">West Paducah</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Louisiana</h3>
              <div class="mega-city-list">
                <a href="stores/baton-rouge-la.html">Baton Rouge</a>
                <a href="stores/bossier-city-la.html">Bossier City</a>
                <a href="stores/broussard-la.html">Broussard</a>
                <a href="stores/gonzales-la.html">Gonzales</a>
                <a href="stores/hammond-la.html">Hammond</a>
                <a href="stores/lake-charles-la.html">Lake Charles</a>
                <a href="stores/mandeville-la.html">Mandeville</a>
                <a href="stores/marksville-la.html">Marksville</a>
                <a href="stores/metairie-la.html">Metairie</a>
                <a href="stores/new-orleans-la.html">New Orleans</a>
                <a href="stores/slidell-la.html">Slidell</a>
                <a href="stores/thibodaux-la.html">Thibodaux</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Maine</h3>
              <div class="mega-city-list">
                <a href="stores/bangor-me.html">Bangor</a>
                <a href="stores/presque-isle-me.html">Presque Isle</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Maryland</h3>
              <div class="mega-city-list">
                <a href="stores/annapolis-md.html">Annapolis</a>
                <a href="stores/baltimore-md.html">Baltimore</a>
                <a href="stores/chevy-chase-md.html">Chevy Chase</a>
                <a href="stores/hagerstown-md.html">Hagerstown</a>
                <a href="stores/mount-airy-md.html">Mount Airy</a>
                <a href="stores/towson-md.html">Towson</a>
                <a href="stores/westminster-md.html">Westminster</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Massachusetts</h3>
              <div class="mega-city-list">
                <a href="stores/attleboro-ma.html">Attleboro</a>
                <a href="stores/auburn-ma.html">Auburn</a>
                <a href="stores/boston-ma.html">Boston</a>
                <a href="stores/burlington-ma.html">Burlington</a>
                <a href="stores/danvers-ma.html">Danvers</a>
                <a href="stores/dedham-ma.html">Dedham</a>
                <a href="stores/fall-river-ma.html">Fall River</a>
                <a href="stores/haverhill-ma.html">Haverhill</a>
                <a href="stores/hudson-ma.html">Hudson</a>
                <a href="stores/hyannis-ma.html">Hyannis</a>
                <a href="stores/indian-orchard-ma.html">Indian Orchard</a>
                <a href="stores/littleton-ma.html">Littleton</a>
                <a href="stores/marlborough-ma.html">Marlborough</a>
                <a href="stores/mashpee-ma.html">Mashpee</a>
                <a href="stores/natick-ma.html">Natick</a>
                <a href="stores/new-bedford-ma.html">New Bedford</a>
                <a href="stores/north-easton-ma.html">North Easton</a>
                <a href="stores/peabody-ma.html">Peabody</a>
                <a href="stores/piccadilly-square-ma.html">Piccadilly Square</a>
                <a href="stores/pittsfield-ma.html">Pittsfield</a>
                <a href="stores/salem-ma.html">Salem</a>
                <a href="stores/springfield-ma.html">Springfield</a>
                <a href="stores/worcester-ma.html">Worcester</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Michigan</h3>
              <div class="mega-city-list">
                <a href="stores/birch-run-mi.html">Birch Run</a>
                <a href="stores/east-lansing-mi.html">East Lansing</a>
                <a href="stores/fowler-mi.html">Fowler</a>
                <a href="stores/grand-rapids-mi.html">Grand Rapids</a>
                <a href="stores/kalamazoo-mi.html">Kalamazoo</a>
                <a href="stores/milford-mi.html">Milford</a>
                <a href="stores/norway-mi.html">Norway</a>
                <a href="stores/plymouth-mi.html">Plymouth</a>
                <a href="stores/port-huron-mi.html">Port Huron</a>
                <a href="stores/royal-oak-mi.html">Royal Oak</a>
                <a href="stores/southfield-mi.html">Southfield</a>
                <a href="stores/southgate-mi.html">Southgate</a>
                <a href="stores/troy-mi.html">Troy</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Minnesota</h3>
              <div class="mega-city-list">
                <a href="stores/alexandria-mn.html">Alexandria</a>
                <a href="stores/blaine-mn.html">Blaine</a>
                <a href="stores/bloomington-mn.html">Bloomington</a>
                <a href="stores/burnsville-mn.html">Burnsville</a>
                <a href="stores/hutchinson-mn.html">Hutchinson</a>
                <a href="stores/lakeville-mn.html">Lakeville</a>
                <a href="stores/saint-paul-mn.html">Saint Paul</a>
                <a href="stores/st-cloud-mn.html">St. Cloud</a>
                <a href="stores/stillwater-mn.html">Stillwater</a>
                <a href="stores/waite-park-mn.html">Waite Park</a>
                <a href="stores/wayzata-mn.html">Wayzata</a>
                <a href="stores/woodbury-mn.html">Woodbury</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Mississippi</h3>
              <div class="mega-city-list">
                <a href="stores/belmont-ms.html">Belmont</a>
                <a href="stores/cleveland-ms.html">Cleveland</a>
                <a href="stores/diberville-ms.html">Diberville</a>
                <a href="stores/grenada-ms.html">Grenada</a>
                <a href="stores/gulfport-ms.html">Gulfport</a>
                <a href="stores/laurel-ms.html">Laurel</a>
                <a href="stores/madison-ms.html">Madison</a>
                <a href="stores/meridian-ms.html">Meridian</a>
                <a href="stores/ocean-springs-ms.html">Ocean Springs</a>
                <a href="stores/philadelphia-ms.html">Philadelphia</a>
                <a href="stores/pontotoc-ms.html">Pontotoc</a>
                <a href="stores/ridgeland-ms.html">Ridgeland</a>
                <a href="stores/tupelo-ms.html">Tupelo</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Missouri</h3>
              <div class="mega-city-list">
                <a href="stores/arnold-mo.html">Arnold</a>
                <a href="stores/centertown-mo.html">Centertown</a>
                <a href="stores/chesterfield-mo.html">Chesterfield</a>
                <a href="stores/columbia-mo.html">Columbia</a>
                <a href="stores/creve-coeur-mo.html">Creve Coeur</a>
                <a href="stores/des-peres-mo.html">Des Peres</a>
                <a href="stores/festus-mo.html">Festus</a>
                <a href="stores/herculaneum-mo.html">Herculaneum</a>
                <a href="stores/independence-mo.html">Independence</a>
                <a href="stores/kansas-city-mo.html">Kansas City</a>
                <a href="stores/lebanon-mo.html">Lebanon</a>
                <a href="stores/rolla-mo.html">Rolla</a>
                <a href="stores/saint-louis-mo.html">Saint Louis</a>
                <a href="stores/springfield-mo.html">Springfield</a>
                <a href="stores/st-louis-mo.html">St. Louis</a>
                <a href="stores/sullivan-mo.html">Sullivan</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Montana</h3>
              <div class="mega-city-list">
                <a href="stores/conrad-mt.html">Conrad</a>
                <a href="stores/havre-mt.html">Havre</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Nebraska</h3>
              <div class="mega-city-list">
                <a href="stores/fremont-ne.html">Fremont</a>
                <a href="stores/kearney-ne.html">Kearney</a>
                <a href="stores/north-platte-ne.html">North Platte</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Nevada</h3>
              <div class="mega-city-list">
                <a href="stores/las-vegas-nv.html">Las Vegas</a>
                <a href="stores/south-las-vegas-nv.html">South Las Vegas</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>New Hampshire</h3>
              <div class="mega-city-list">
                <a href="stores/bedford-nh.html">Bedford</a>
                <a href="stores/concord-nh.html">Concord</a>
                <a href="stores/kingston-nh.html">Kingston</a>
                <a href="stores/nashua-nh.html">Nashua</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>New Jersey</h3>
              <div class="mega-city-list">
                <a href="stores/andover-nj.html">Andover</a>
                <a href="stores/brick-nj.html">Brick</a>
                <a href="stores/cherry-hill-nj.html">Cherry Hill</a>
                <a href="stores/collingswood-nj.html">Collingswood</a>
                <a href="stores/denville-nj.html">Denville</a>
                <a href="stores/ewing-nj.html">Ewing</a>
                <a href="stores/fanwood-nj.html">Fanwood</a>
                <a href="stores/freehold-nj.html">Freehold</a>
                <a href="stores/glassboro-nj.html">Glassboro</a>
                <a href="stores/hackensack-nj.html">Hackensack</a>
                <a href="stores/haddonfield-nj.html">Haddonfield</a>
                <a href="stores/hewitt-nj.html">Hewitt</a>
                <a href="stores/linwood-nj.html">Linwood</a>
                <a href="stores/livingston-nj.html">Livingston</a>
                <a href="stores/manalapan-nj.html">Manalapan</a>
                <a href="stores/maple-shade-nj.html">Maple Shade</a>
                <a href="stores/marlton-nj.html">Marlton</a>
                <a href="stores/maywood-nj.html">Maywood</a>
                <a href="stores/millburn-nj.html">Millburn</a>
                <a href="stores/mine-hill-nj.html">Mine Hill</a>
                <a href="stores/northfield-nj.html">Northfield</a>
                <a href="stores/old-bridge-nj.html">Old Bridge</a>
                <a href="stores/paramus-nj.html">Paramus</a>
                <a href="stores/ridgefield-nj.html">Ridgefield</a>
                <a href="stores/ridgewood-nj.html">Ridgewood</a>
                <a href="stores/sea-isle-city-nj.html">Sea Isle City</a>
                <a href="stores/secaucus-nj.html">Secaucus</a>
                <a href="stores/sewell-nj.html">Sewell</a>
                <a href="stores/toms-river-nj.html">Toms River</a>
                <a href="stores/westwood-nj.html">Westwood</a>
                <a href="stores/woodbridge-nj.html">Woodbridge</a>
                <a href="stores/woodcliff-lake-nj.html">Woodcliff Lake</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>New Mexico</h3>
              <div class="mega-city-list">
                <a href="stores/hobbs-nm.html">Hobbs</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>New York</h3>
              <div class="mega-city-list">
                <a href="stores/albany-ny.html">Albany</a>
                <a href="stores/armonk-ny.html">Armonk</a>
                <a href="stores/babylon-ny.html">Babylon</a>
                <a href="stores/brooklyn-ny.html">Brooklyn</a>
                <a href="stores/centereach-ny.html">Centereach</a>
                <a href="stores/clifton-park-ny.html">Clifton Park</a>
                <a href="stores/fairport-ny.html">Fairport</a>
                <a href="stores/farmingdale-ny.html">Farmingdale</a>
                <a href="stores/floral-park-ny.html">Floral Park</a>
                <a href="stores/forest-hills-ny.html">Forest Hills</a>
                <a href="stores/garden-city-ny.html">Garden City</a>
                <a href="stores/halfmoon-ny.html">Halfmoon</a>
                <a href="stores/harriman-ny.html">Harriman</a>
                <a href="stores/horseheads-ny.html">Horseheads</a>
                <a href="stores/huntington-station-ny.html">Huntington Station</a>
                <a href="stores/massena-ny.html">Massena</a>
                <a href="stores/mount-kisco-ny.html">Mount Kisco</a>
                <a href="stores/new-hartford-ny.html">New Hartford</a>
                <a href="stores/new-york-ny.html">New York</a>
                <a href="stores/oceanside-ny.html">Oceanside</a>
                <a href="stores/paramus-ny.html">Paramus</a>
                <a href="stores/plainview-ny.html">Plainview</a>
                <a href="stores/potsdam-ny.html">Potsdam</a>
                <a href="stores/poughkeepsie-ny.html">Poughkeepsie</a>
                <a href="stores/rochester-ny.html">Rochester</a>
                <a href="stores/rockville-centre-ny.html">Rockville Centre</a>
                <a href="stores/rye-brook-ny.html">Rye Brook</a>
                <a href="stores/saratoga-springs-ny.html">Saratoga Springs</a>
                <a href="stores/scarsdale-ny.html">Scarsdale</a>
                <a href="stores/schenectady-ny.html">Schenectady</a>
                <a href="stores/seaford-ny.html">Seaford</a>
                <a href="stores/staten-island-ny.html">Staten Island</a>
                <a href="stores/stony-brook-ny.html">Stony Brook</a>
                <a href="stores/syosset-ny.html">Syosset</a>
                <a href="stores/syracuse-ny.html">Syracuse</a>
                <a href="stores/watertown-ny.html">Watertown</a>
                <a href="stores/west-nyack-ny.html">West Nyack</a>
                <a href="stores/white-plains-ny.html">White Plains</a>
                <a href="stores/whitestone-ny.html">Whitestone</a>
                <a href="stores/williamsville-ny.html">Williamsville</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>North Carolina</h3>
              <div class="mega-city-list">
                <a href="stores/boone-nc.html">Boone</a>
                <a href="stores/burlington-nc.html">Burlington</a>
                <a href="stores/clemmons-nc.html">Clemmons</a>
                <a href="stores/concord-nc.html">Concord</a>
                <a href="stores/cornelius-nc.html">Cornelius</a>
                <a href="stores/fayetteville-nc.html">Fayetteville</a>
                <a href="stores/gastonia-nc.html">Gastonia</a>
                <a href="stores/goldsboro-nc.html">Goldsboro</a>
                <a href="stores/greensboro-nc.html">Greensboro</a>
                <a href="stores/greenville-nc.html">Greenville</a>
                <a href="stores/hays-nc.html">Hays</a>
                <a href="stores/hickory-nc.html">Hickory</a>
                <a href="stores/high-point-nc.html">High Point</a>
                <a href="stores/hildebran-nc.html">Hildebran</a>
                <a href="stores/indian-trail-nc.html">Indian Trail</a>
                <a href="stores/kannapolis-nc.html">Kannapolis</a>
                <a href="stores/lumberton-nc.html">Lumberton</a>
                <a href="stores/monroe-nc.html">Monroe</a>
                <a href="stores/mooresville-nc.html">Mooresville</a>
                <a href="stores/raleigh-nc.html">Raleigh</a>
                <a href="stores/smithfield-nc.html">Smithfield</a>
                <a href="stores/washington-nc.html">Washington</a>
                <a href="stores/wendell-nc.html">Wendell</a>
                <a href="stores/west-jefferson-nc.html">West Jefferson</a>
                <a href="stores/wilmington-nc.html">Wilmington</a>
                <a href="stores/yadkinville-nc.html">Yadkinville</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>North Dakota</h3>
              <div class="mega-city-list">
                <a href="stores/bismarck-nd.html">Bismarck</a>
                <a href="stores/fargo-nd.html">Fargo</a>
                <a href="stores/minot-nd.html">Minot</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Ohio</h3>
              <div class="mega-city-list">
                <a href="stores/akron-oh.html">Akron</a>
                <a href="stores/avon-oh.html">Avon</a>
                <a href="stores/beachwood-oh.html">Beachwood</a>
                <a href="stores/chagrin-falls-oh.html">Chagrin Falls</a>
                <a href="stores/chillicothe-oh.html">Chillicothe</a>
                <a href="stores/cincinnati-oh.html">Cincinnati</a>
                <a href="stores/cleveland-oh.html">Cleveland</a>
                <a href="stores/columbus-oh.html">Columbus</a>
                <a href="stores/dayton-oh.html">Dayton</a>
                <a href="stores/delaware-oh.html">Delaware</a>
                <a href="stores/dublin-oh.html">Dublin</a>
                <a href="stores/findlay-oh.html">Findlay</a>
                <a href="stores/gallipolis-oh.html">Gallipolis</a>
                <a href="stores/kenton-oh.html">Kenton</a>
                <a href="stores/mentor-oh.html">Mentor</a>
                <a href="stores/middletown-oh.html">Middletown</a>
                <a href="stores/minerva-oh.html">Minerva</a>
                <a href="stores/niles-oh.html">Niles</a>
                <a href="stores/saint-marys-oh.html">Saint Marys</a>
                <a href="stores/st-henry-oh.html">St. Henry</a>
                <a href="stores/toledo-oh.html">Toledo</a>
                <a href="stores/west-lafayette-oh.html">West Lafayette</a>
                <a href="stores/youngstown-oh.html">Youngstown</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Oklahoma</h3>
              <div class="mega-city-list">
                <a href="stores/broken-arrow-ok.html">Broken Arrow</a>
                <a href="stores/clinton-ok.html">Clinton</a>
                <a href="stores/davis-ok.html">Davis</a>
                <a href="stores/edmond-ok.html">Edmond</a>
                <a href="stores/enid-ok.html">Enid</a>
                <a href="stores/lawton-ok.html">Lawton</a>
                <a href="stores/oklahoma-city-ok.html">Oklahoma City</a>
                <a href="stores/tahlequah-ok.html">Tahlequah</a>
                <a href="stores/tulsa-ok.html">Tulsa</a>
                <a href="stores/vian-ok.html">Vian</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Oregon</h3>
              <div class="mega-city-list">
                <a href="stores/portland-or.html">Portland</a>
                <a href="stores/salem-or.html">Salem</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Pennsylvania</h3>
              <div class="mega-city-list">
                <a href="stores/allentown-pa.html">Allentown</a>
                <a href="stores/bala-cynwyd-pa.html">Bala Cynwyd</a>
                <a href="stores/bellefonte-pa.html">Bellefonte</a>
                <a href="stores/bensalem-pa.html">Bensalem</a>
                <a href="stores/chambersburg-pa.html">Chambersburg</a>
                <a href="stores/chester-pa.html">Chester</a>
                <a href="stores/columbus-pa.html">Columbus</a>
                <a href="stores/drexell-hill-pa.html">Drexell Hill</a>
                <a href="stores/erie-pa.html">Erie</a>
                <a href="stores/finleyville-pa.html">Finleyville</a>
                <a href="stores/gibsonia-pa.html">Gibsonia</a>
                <a href="stores/greensburg-pa.html">Greensburg</a>
                <a href="stores/hanover-pa.html">Hanover</a>
                <a href="stores/king-of-prussia-pa.html">King Of Prussia</a>
                <a href="stores/kingston-pa.html">Kingston</a>
                <a href="stores/kittanning-pa.html">Kittanning</a>
                <a href="stores/langhorne-pa.html">Langhorne</a>
                <a href="stores/lansdale-pa.html">Lansdale</a>
                <a href="stores/malvern-pa.html">Malvern</a>
                <a href="stores/murrysville-pa.html">Murrysville</a>
                <a href="stores/newton-pa.html">Newton</a>
                <a href="stores/newton-square-pa.html">Newton Square</a>
                <a href="stores/oxford-pa.html">Oxford</a>
                <a href="stores/paoli-pa.html">Paoli</a>
                <a href="stores/philadelphia-pa.html">Philadelphia</a>
                <a href="stores/pittsburgh-pa.html">Pittsburgh</a>
                <a href="stores/scranton-pa.html">Scranton</a>
                <a href="stores/skippack-pa.html">Skippack</a>
                <a href="stores/state-college-pa.html">State College</a>
                <a href="stores/warrington-pa.html">Warrington</a>
                <a href="stores/west-reading-pa.html">West Reading</a>
                <a href="stores/yardley-pa.html">Yardley</a>
                <a href="stores/york-pa.html">York</a>
                <a href="stores/zelienople-pa.html">Zelienople</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Pr</h3>
              <div class="mega-city-list">
                <a href="stores/caguas-pr.html">Caguas</a>
                <a href="stores/juncos-pr.html">Juncos</a>
                <a href="stores/san-juan-pr.html">San Juan</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Rhode Island</h3>
              <div class="mega-city-list">
                <a href="stores/cranston-ri.html">Cranston</a>
                <a href="stores/e-greenwich-ri.html">E Greenwich</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>South Carolina</h3>
              <div class="mega-city-list">
                <a href="stores/columbia-sc.html">Columbia</a>
                <a href="stores/greenville-sc.html">Greenville</a>
                <a href="stores/lugoff-sc.html">Lugoff</a>
                <a href="stores/murrells-inlet-sc.html">Murrells Inlet</a>
                <a href="stores/myrtle-beach-sc.html">Myrtle Beach</a>
                <a href="stores/simpsonville-sc.html">Simpsonville</a>
                <a href="stores/spartanburg-sc.html">Spartanburg</a>
                <a href="stores/sumter-sc.html">Sumter</a>
                <a href="stores/west-columbia-sc.html">West Columbia</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>South Dakota</h3>
              <div class="mega-city-list">
                <a href="stores/mitchell-sd.html">Mitchell</a>
                <a href="stores/rapid-city-sd.html">Rapid City</a>
                <a href="stores/sioux-falls-sd.html">Sioux Falls</a>
                <a href="stores/wilmot-sd.html">Wilmot</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Tennessee</h3>
              <div class="mega-city-list">
                <a href="stores/bristol-tn.html">Bristol</a>
                <a href="stores/chattanooga-tn.html">Chattanooga</a>
                <a href="stores/cleveland-tn.html">Cleveland</a>
                <a href="stores/collierville-tn.html">Collierville</a>
                <a href="stores/cookeville-tn.html">Cookeville</a>
                <a href="stores/goodlettsville-tn.html">Goodlettsville</a>
                <a href="stores/hendersonville-tn.html">Hendersonville</a>
                <a href="stores/hixson-tn.html">Hixson</a>
                <a href="stores/jefferson-city-tn.html">Jefferson City</a>
                <a href="stores/kingsport-tn.html">Kingsport</a>
                <a href="stores/knoxville-tn.html">Knoxville</a>
                <a href="stores/lebanon-tn.html">Lebanon</a>
                <a href="stores/murfreesboro-tn.html">Murfreesboro</a>
                <a href="stores/nashville-tn.html">Nashville</a>
                <a href="stores/smyrna-tn.html">Smyrna</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Texas</h3>
              <div class="mega-city-list">
                <a href="stores/amarillo-tx.html">Amarillo</a>
                <a href="stores/angleton-tx.html">Angleton</a>
                <a href="stores/austin-tx.html">Austin</a>
                <a href="stores/carrollton-tx.html">Carrollton</a>
                <a href="stores/carthage-tx.html">Carthage</a>
                <a href="stores/cedar-park-tx.html">Cedar Park</a>
                <a href="stores/college-station-tx.html">College Station</a>
                <a href="stores/colleyville-tx.html">Colleyville</a>
                <a href="stores/dallas-tx.html">Dallas</a>
                <a href="stores/el-paso-tx.html">El Paso</a>
                <a href="stores/fort-worth-tx.html">Fort Worth</a>
                <a href="stores/frisco-tx.html">Frisco</a>
                <a href="stores/houston-tx.html">Houston</a>
                <a href="stores/humble-tx.html">Humble</a>
                <a href="stores/laredo-tx.html">Laredo</a>
                <a href="stores/league-city-tx.html">League City</a>
                <a href="stores/lewisville-tx.html">Lewisville</a>
                <a href="stores/lubbock-tx.html">Lubbock</a>
                <a href="stores/mcallen-tx.html">McAllen</a>
                <a href="stores/new-braunfels-tx.html">New Braunfels</a>
                <a href="stores/palmview-tx.html">Palmview</a>
                <a href="stores/plano-tx.html">Plano</a>
                <a href="stores/robstown-tx.html">Robstown</a>
                <a href="stores/san-angelo-tx.html">San Angelo</a>
                <a href="stores/san-antonio-tx.html">San Antonio</a>
                <a href="stores/the-woodlands-tx.html">The Woodlands</a>
                <a href="stores/waco-tx.html">Waco</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Utah</h3>
              <div class="mega-city-list">
                <a href="stores/salt-lake-city-ut.html">Salt Lake City</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Vermont</h3>
              <div class="mega-city-list">
                <a href="stores/essex-junction-vt.html">Essex Junction</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Virginia</h3>
              <div class="mega-city-list">
                <a href="stores/blacksburg-va.html">Blacksburg</a>
                <a href="stores/chesapeake-va.html">Chesapeake</a>
                <a href="stores/colonial-heights-va.html">Colonial Heights</a>
                <a href="stores/fredericksburg-va.html">Fredericksburg</a>
                <a href="stores/harrisonburg-va.html">Harrisonburg</a>
                <a href="stores/lynchburg-va.html">Lynchburg</a>
                <a href="stores/manassas-va.html">Manassas</a>
                <a href="stores/mclean-va.html">McLean</a>
                <a href="stores/norton-va.html">Norton</a>
                <a href="stores/richmond-va.html">Richmond</a>
                <a href="stores/roanoke-va.html">Roanoke</a>
                <a href="stores/virginia-beach-va.html">Virginia Beach</a>
                <a href="stores/waynesboro-va.html">Waynesboro</a>
                <a href="stores/williamsburg-va.html">Williamsburg</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Washington</h3>
              <div class="mega-city-list">
                <a href="stores/bellevue-wa.html">Bellevue</a>
                <a href="stores/burien-wa.html">Burien</a>
                <a href="stores/puyallup-wa.html">Puyallup</a>
                <a href="stores/redmond-wa.html">Redmond</a>
                <a href="stores/seattle-wa.html">Seattle</a>
                <a href="stores/silverdale-wa.html">Silverdale</a>
                <a href="stores/spokane-wa.html">Spokane</a>
                <a href="stores/tacoma-wa.html">Tacoma</a>
                <a href="stores/wenatchee-wa.html">Wenatchee</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>West Virginia</h3>
              <div class="mega-city-list">
                <a href="stores/bridgeport-wv.html">Bridgeport</a>
                <a href="stores/clarksburg-wv.html">Clarksburg</a>
                <a href="stores/eleanor-wv.html">Eleanor</a>
                <a href="stores/milton-wv.html">Milton</a>
                <a href="stores/morgantown-wv.html">Morgantown</a>
                <a href="stores/vienna-wv.html">Vienna</a>
                <a href="stores/weirton-wv.html">Weirton</a>
                <a href="stores/wheeling-wv.html">Wheeling</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Wisconsin</h3>
              <div class="mega-city-list">
                <a href="stores/clinton-wi.html">Clinton</a>
                <a href="stores/green-bay-wi.html">Green Bay</a>
                <a href="stores/reedsburg-wi.html">Reedsburg</a>
                <a href="stores/sayner-wi.html">Sayner</a>
              </div>
            </section>
          </div>
        </div>
        <div class="mega-country-panel" id="store-locator-australia" data-country-panel="AU">
          <div class="mega-state-grid">
            <section class="mega-state-group">
              <h3>New South Wales</h3>
              <div class="mega-city-list">
                <a href="stores/campsie-nsw.html">Campsie</a>
                <a href="stores/castle-hill-nsw.html">Castle Hill</a>
                <a href="stores/fairfield-nsw.html">Fairfield</a>
                <a href="stores/ryde-nsw.html">Ryde</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Queensland</h3>
              <div class="mega-city-list">
                <a href="stores/brisbane-qld.html">Brisbane</a>
                <a href="stores/cairns-qld.html">Cairns</a>
                <a href="stores/townsville-qld.html">Townsville</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>South Australia</h3>
              <div class="mega-city-list">
                <a href="stores/highgate-sa.html">Highgate</a>
                <a href="stores/paradise-sa.html">Paradise</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Victoria</h3>
              <div class="mega-city-list">
                <a href="stores/chadstone-vic.html">Chadstone</a>
                <a href="stores/melbourne-vic.html">Melbourne</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Western Australia</h3>
              <div class="mega-city-list">
                <a href="stores/mandurah-wa.html">Mandurah</a>
                <a href="stores/mount-lawley-wa.html">Mount Lawley</a>
                <a href="stores/perth-wa.html">Perth</a>
              </div>
            </section>
          </div>
        </div>
        <div class="mega-country-panel" id="store-locator-canada" data-country-panel="CA">
          <div class="mega-state-grid">
            <section class="mega-state-group">
              <h3>Alberta</h3>
              <div class="mega-city-list">
                <a href="stores/calgary-ab.html">Calgary</a>
                <a href="stores/edmonton-ab.html">Edmonton</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>British Columbia</h3>
              <div class="mega-city-list">
                <a href="stores/abbotsford-bc.html">Abbotsford</a>
                <a href="stores/burnaby-bc.html">Burnaby</a>
                <a href="stores/courtenay-bc.html">Courtenay</a>
                <a href="stores/kelowna-bc.html">Kelowna</a>
                <a href="stores/nanaimo-bc.html">Nanaimo</a>
                <a href="stores/new-west-bc.html">New West</a>
                <a href="stores/richmond-bc.html">Richmond</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Manitoba</h3>
              <div class="mega-city-list">
                <a href="stores/winnipeg-mb.html">Winnipeg</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Nova Scotia</h3>
              <div class="mega-city-list">
                <a href="stores/halifax-ns.html">Halifax</a>
                <a href="stores/sydney-ns.html">Sydney</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Ontario</h3>
              <div class="mega-city-list">
                <a href="stores/belleville-on.html">Belleville</a>
                <a href="stores/collingwood-on.html">Collingwood</a>
                <a href="stores/guelph-on.html">Guelph</a>
                <a href="stores/leamington-on.html">Leamington</a>
                <a href="stores/lindsay-on.html">Lindsay</a>
                <a href="stores/london-on.html">London</a>
                <a href="stores/mississauga-on.html">Mississauga</a>
                <a href="stores/oakville-on.html">Oakville</a>
                <a href="stores/pembroke-on.html">Pembroke</a>
                <a href="stores/richmond-hill-on.html">Richmond Hill</a>
                <a href="stores/sault-ste-marie-on.html">Sault Ste Marie</a>
                <a href="stores/st-jacobs-on.html">St Jacobs</a>
                <a href="stores/toronto-on.html">Toronto</a>
                <a href="stores/vaughaun-on.html">Vaughaun</a>
                <a href="stores/woodbridge-on.html">Woodbridge</a>
              </div>
            </section>
            <section class="mega-state-group">
              <h3>Quebec</h3>
              <div class="mega-city-list">
                <a href="stores/chicoutimi-qc.html">Chicoutimi</a>
                <a href="stores/laval-qc.html">Laval</a>
                <a href="stores/montreal-qc.html">Montreal</a>
                <a href="stores/saint-lin-laurentides-qc.html">Saint-Lin-Laurentides</a>
                <a href="stores/westmount-qc.html">Westmount</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </details>
`;

const feedItems = [
  ['Cloud blue tulle', images.cloud],
  ['Homecoming color', images.pink],
  ['Evening satin', images.copper],
  ['Soft sparkle', images.ice],
  ['Prom edit', images.peach],
];

const collections = [
  ['Prom Dresses', 'Shop Prom', images.cloud, 'large'],
  ['Mother of the Bride', 'Shop Occasion', images.ice],
  ['Homecoming', 'Shop Homecoming', images.pink],
  ['Plus Size', 'Shop Plus Size', images.peach],
  ['Evening Dresses', 'Shop Evening', images.copper],
];

const products = [
  ['La Femme 33812', images.cloud, ['#b8d9e9', '#f7f3ea', '#0f1728']],
  ['La Femme 33355', images.pink, ['#f38ab8', '#050505', '#f4d4c8']],
  ['La Femme 33417', images.copper, ['#9b4d32', '#471a2d', '#1b1b1c']],
  ['La Femme 33863', images.peach, ['#f1b5a6', '#c9dded', '#fff6ee']],
  ['La Femme 33373', images.ice, ['#c9dded', '#f7f3ea', '#1b1b1c']],
  ['La Femme 33355 Rose', images.pink, ['#f38ab8', '#2c2f3a', '#ead8c9']],
];

const featuredPosts = [
  {
    title: 'How to Choose a Prom Dress That Feels Like You',
    image: images.pink,
  },
  {
    title: 'Soft Color Stories for Spring Occasions',
    image: images.peach,
  },
  {
    title: 'A Guide to Evening Dress Details',
    image: images.copper,
  },
];

const footerColumns = [
  {
    title: 'Shop',
    links: [
      ['Prom Dresses', 'index.html#collections'],
      ['Mother of the Bride', 'index.html#collections'],
      ['Homecoming', 'index.html#collections'],
      ['Plus Size', 'index.html#collections'],
      ['Evening Dresses', 'index.html#collections'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['The Brand', 'index.html'],
      ['Careers', 'contact.html'],
      ['Become A Retailer', 'contact.html'],
      ['Store Locator', 'store-locator.html'],
      ['Chicago Stores', 'stores/chicago-il.html'],
      ['Dallas Stores', 'stores/dallas-tx.html'],
      ['Los Angeles Stores', 'stores/los-angeles-ca.html'],
      ['New York Stores', 'stores/new-york-ny.html'],
      ['Toronto Stores', 'stores/toronto-on.html'],
      ['Press & Media', 'contact.html'],
      ['Affiliate Program', 'contact.html'],
      ['Contact Us', 'contact.html'],
    ],
  },
];

const socialLinks = [
  [
    'Facebook',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.3h2.2V5.1c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.8v3.6h3.3V24h4v-7.1h3.2l.5-3.6h-3.7v-2.6c0-1 .3-1.7 2.1-1.7Z"/></svg>',
  ],
  [
    'Instagram',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm5.4-2.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>',
  ],
  [
    'X',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 10.5 22.8 1h-2l-7.3 8.2L7.7 1H1l8.8 12.4L1 23.4h2l7.7-8.7 6.2 8.7h6.7l-9.2-12.9Zm-2.7 3.1-.9-1.2L3.7 2.5h3l5.7 8 .9 1.2 7.5 10.3h-3l-6.1-8.4Z"/></svg>',
  ],
  [
    'TikTok',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 2c.4 3 2.1 4.8 5 5v3.4a8.5 8.5 0 0 1-5-1.6v7.1a6.1 6.1 0 1 1-6.1-6.1c.5 0 1 .1 1.5.2v3.6a2.7 2.7 0 1 0 1.1 2.2V2H16Z"/></svg>',
  ],
  [
    'Pinterest',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.3 2C6.7 2 3 5.7 3 10.6c0 3.1 1.7 4.9 2.8 4.9.5 0 .8-1.3.8-1.7 0-.5-1.2-1.5-1.2-3.5 0-4.1 3.1-7 7.1-7 3.4 0 5.9 1.9 5.9 5.5 0 2.7-1.1 7.8-4.6 7.8-1.3 0-2.4-.9-2.4-2.2 0-1.9 1.3-3.7 1.3-5.7 0-3.3-4.6-2.7-4.6 1.3 0 .8.1 1.8.5 2.5-.7 3-2 7.4-2 10.5 0 .3 0 .6.1.9h.2c2.6-3.5 2.5-4.2 3.7-8.8.7 1.2 2.3 1.9 3.7 1.9 5.6 0 7.7-5.5 7.7-10.4C22 4.1 17.9 2 12.3 2Z"/></svg>',
  ],
];

const duplicate = (items) => [...items, ...items];

const image = ({ src, alt }, decorative = false) =>
  `<img src="${src}" alt="${decorative ? '' : alt}">`;

const render = (selector, markup) => {
  const node = document.querySelector(selector);
  if (node) node.innerHTML = markup;
};

const rootPathPrefix = window.location.pathname.includes('/stores/') ? '../' : '';
const isExternalHref = (href = '') =>
  /^(?:[a-z]+:|#|\/)/i.test(href) || href.startsWith('../');
const qualifyShellLinks = (root = document) => {
  if (!rootPathPrefix || !root) return;
  root.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || isExternalHref(href)) return;
    link.setAttribute('href', `${rootPathPrefix}${href}`);
  });
};

const headerShellMarkup = `
  <div class="header-bar">
    <a class="brand" href="index.html" aria-label="La Femme home">
      <img src="https://www.lafemmefashion.com/sites/default/files/logo.png" alt="La Femme" />
    </a>
    <div class="header-icons" aria-label="Account and shopping tools">
      <a href="#" aria-label="Account"><svg viewBox="0 0 24 24"><path d="M12 12.3a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8Zm-7.4 8.2a7.4 7.4 0 0 1 14.8 0" /></svg></a>
      <a href="#" aria-label="Search"><svg viewBox="0 0 24 24"><path d="m20 20-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" /></svg></a>
      <a href="#" aria-label="Bag"><svg viewBox="0 0 24 24"><path d="M6.5 8.5h11l1.1 12h-13.2l1.1-12Zm3 0V6a2.5 2.5 0 0 1 5 0v2.5" /></svg></a>
    </div>
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span></button>
  </div>
  <nav class="site-nav" aria-label="Primary navigation" data-nav></nav>
`;

const footerShellMarkup = `
  <div class="footer-brand">
    <img src="https://www.lafemmefashion.com/sites/default/files/logo.png" alt="La Femme" />
    <p>Designer dresses by La Femme, created for prom, evening, bridal parties, and special occasions.</p>
    <div class="social-links" aria-label="Social links" data-social-links></div>
  </div>
  <div class="footer-columns" data-footer-columns></div>
`;

const siteHeader = document.querySelector('[data-header]');
if (siteHeader && !siteHeader.children.length) {
  siteHeader.innerHTML = headerShellMarkup;
  qualifyShellLinks(siteHeader);
}

const siteFooter = document.querySelector('.site-footer');
if (siteFooter && !siteFooter.children.length) {
  siteFooter.innerHTML = footerShellMarkup;
  qualifyShellLinks(siteFooter);
}

const primaryNavMarkup = `
  <a href="index.html#collections">Prom Dresses<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Mother of the Bride<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Homecoming<span aria-hidden="true"></span></a>
  <a href="index.html#collections">Plus Size<span aria-hidden="true"></span></a>
  <a href="contact.html">Contact Us</a>
`;

const primaryNav = document.querySelector('[data-nav]');

if (primaryNav) {
  primaryNav.innerHTML = `${primaryNavMarkup}${locatorMenuMarkup}`;
  qualifyShellLinks(primaryNav);
}

const splitMegaMenuStateCities = () => {
  const citiesPerColumn = 7;

  document.querySelectorAll('.mega-state-grid').forEach((grid) => {
    if (!(grid instanceof HTMLElement) || grid.dataset.cityColumnsReady === 'true') return;

    Array.from(grid.querySelectorAll(':scope > .mega-state-group')).forEach((group) => {
      const cityList = group.querySelector(':scope > .mega-city-list');
      const heading = group.querySelector(':scope > h3');
      const cityLinks = cityList ? Array.from(cityList.querySelectorAll(':scope > a')) : [];

      if (!cityList || !heading || cityLinks.length <= citiesPerColumn) return;

      const stateName = heading.textContent?.trim() || 'More cities';
      group.dataset.stateName = stateName;
      const firstColumnSize =
        cityLinks.length % citiesPerColumn === 1 ? citiesPerColumn + 1 : citiesPerColumn;
      let insertionPoint = group;

      for (let index = firstColumnSize; index < cityLinks.length; index += citiesPerColumn) {
        const continuation = document.createElement('section');
        continuation.className = 'mega-state-group mega-state-group-continuation';
        continuation.dataset.stateName = stateName;

        const continuationHeading = heading.cloneNode(true);
        continuationHeading.textContent = '';
        continuationHeading.setAttribute('aria-hidden', 'true');

        const continuationList = document.createElement('div');
        continuationList.className = 'mega-city-list';
        cityLinks.slice(index, index + citiesPerColumn).forEach((link) => {
          continuationList.append(link);
        });

        continuation.append(continuationHeading, continuationList);
        insertionPoint.insertAdjacentElement('afterend', continuation);
        insertionPoint = continuation;
      }
    });

    grid.dataset.cityColumnsReady = 'true';
  });
};

splitMegaMenuStateCities();

const setupWhereToBuyMenus = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.where-to-buy-menu').forEach((menu) => {
    if (!(menu instanceof HTMLElement) || menu.dataset.enhanced === 'true') return;

    const triggers = Array.from(menu.querySelectorAll('[data-country-trigger]'));
    const panels = Array.from(menu.querySelectorAll('[data-country-panel]'));
    if (!triggers.length || !panels.length) return;

    const summary = menu.querySelector(':scope > summary');
    const menuLink = menu.querySelector('.locator-nav-link');
    const menuToggle = menu.querySelector('.locator-menu-toggle');
    const setMenuOpen = (isOpen) => {
      menu.open = isOpen;
      menuToggle?.setAttribute('aria-expanded', String(isOpen));
      menuToggle?.setAttribute('aria-label', isOpen ? 'Close store locator menu' : 'Open store locator menu');
    };
    menuLink?.addEventListener('click', (event) => event.stopPropagation());
    summary?.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('.locator-nav-link')) return;
      event.preventDefault();
      if (event.target instanceof Element && event.target.closest('.locator-menu-toggle')) {
        setMenuOpen(!menu.open);
      }
    });
    menu.addEventListener('toggle', () => {
      menuToggle?.setAttribute('aria-expanded', String(menu.open));
      menuToggle?.setAttribute('aria-label', menu.open ? 'Close store locator menu' : 'Open store locator menu');
    });

    const currentCityLink = panels
      .flatMap((panel) => Array.from(panel.querySelectorAll('a[href]')))
      .find((link) => link.getAttribute('href') === currentPage);
    currentCityLink?.setAttribute('aria-current', 'page');

    const countryRail = menu.querySelector('.country-rail');
    const stateNav = document.createElement('div');
    stateNav.className = 'mega-state-nav';
    stateNav.setAttribute('aria-label', 'Choose a state');

    const countryPrompt = document.createElement('p');
    countryPrompt.className = 'mega-country-rail-label';
    countryPrompt.textContent = 'Select a country';

    const countryBack = document.createElement('button');
    countryBack.type = 'button';
    countryBack.className = 'mega-country-back';
    countryBack.textContent = '← Back to countries';

    const stateBack = document.createElement('button');
    stateBack.type = 'button';
    stateBack.className = 'mega-country-back';
    stateBack.textContent = '← Back to states';
    let selectedCountry = '';

    const setState = (country, state = '') => {
      const panel = panels.find(
        (item) => item.getAttribute('data-country-panel') === country,
      );
      if (!panel) return;

      panel.querySelectorAll('.mega-state-group').forEach((group) => {
        const stateName = group.dataset.stateName || group.querySelector('h3')?.textContent?.trim() || '';
        group.hidden = !state || stateName !== state;
      });

      panel.querySelector('.mega-city-panel-prompt')?.toggleAttribute('hidden', Boolean(state));
      stateNav.querySelectorAll('[data-state-name]').forEach((button) => {
        const isActive = button.getAttribute('data-state-name') === state;
        button.setAttribute('aria-selected', String(isActive));
      });

      menu.classList.toggle('has-state', Boolean(state));
      if (state) countryRail?.replaceChildren(stateBack);
    };

    const renderStates = (country) => {
      const panel = panels.find(
        (item) => item.getAttribute('data-country-panel') === country,
      );
      if (!panel) return;

      const states = [...new Set(
        Array.from(panel.querySelectorAll('.mega-state-group'))
          .map((group) => group.dataset.stateName || group.querySelector('h3')?.textContent?.trim() || '')
          .filter(Boolean),
      )].sort();

      stateNav.replaceChildren();
      const statePrompt = document.createElement('p');
      statePrompt.className = 'mega-country-rail-label';
      statePrompt.textContent = 'Select a state';
      stateNav.append(statePrompt);

      states.forEach((state) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.stateName = state;
        button.textContent = state;
        button.setAttribute('aria-selected', 'false');
        button.addEventListener('click', () => setState(country, state));
        stateNav.append(button);
      });

      let panelPrompt = panel.querySelector('.mega-city-panel-prompt');
      if (!panelPrompt) {
        panelPrompt = document.createElement('p');
        panelPrompt.className = 'mega-city-panel-prompt';
        panelPrompt.textContent = 'Select a state to view its city locations.';
        panel.prepend(panelPrompt);
      }
      setState(country);
    };

    const setCountry = (country) => {
      if (!country) {
        selectedCountry = '';
        menu.classList.remove('has-state');
        panels.forEach((panel) => panel.classList.remove('is-active'));
        countryRail?.replaceChildren(countryPrompt, ...triggers);
        return;
      }

      selectedCountry = country;
      menu.classList.remove('has-state');
      triggers.forEach((trigger) => {
        const isActive = trigger.getAttribute('data-country-trigger') === country;
        trigger.setAttribute('aria-selected', String(isActive));
      });
      panels.forEach((panel) => {
        const isActive = panel.getAttribute('data-country-panel') === country;
        panel.classList.toggle('is-active', isActive);
      });

      renderStates(country);
      countryRail?.replaceChildren(countryBack, stateNav);
    };

    triggers.forEach((trigger, index) => {
      const country = trigger.getAttribute('data-country-trigger');

      trigger.addEventListener('click', () => setCountry(country));
      trigger.addEventListener('keydown', (event) => {
        if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
        const nextTrigger =
          triggers[(index + direction + triggers.length) % triggers.length];
        nextTrigger.focus();
      });
    });

    countryBack.addEventListener('click', () => setCountry(''));
    stateBack.addEventListener('click', () => {
      if (!selectedCountry) return;
      setState(selectedCountry);
      countryRail?.replaceChildren(countryBack, stateNav);
    });
    menu.addEventListener('click', (event) => {
      const link = event.target instanceof Element ? event.target.closest('.mega-city-list > a[href]') : null;
      if (link) setMenuOpen(false);
    });

    menu.classList.add('is-enhanced', 'is-wizard');
    menu.dataset.enhanced = 'true';
    setCountry('');
  });
};

setupWhereToBuyMenus();

const mainContent = document.querySelector('main');
const existingBreadcrumbs = mainContent?.querySelector('.breadcrumbs');
const isStoreLocatorPage = Boolean(mainContent?.querySelector('.locator-classic'));

if (mainContent && !mainContent.querySelector('.breadcrumb-bar')) {
  const breadcrumbBar = document.createElement('div');
  breadcrumbBar.className = 'breadcrumb-bar';
  const breadcrumbInner = document.createElement('div');
  breadcrumbInner.className = 'section-inner';

  if (existingBreadcrumbs) {
    breadcrumbInner.append(existingBreadcrumbs);
  } else if (isStoreLocatorPage) {
    const locatorBreadcrumbs = document.createElement('nav');
    locatorBreadcrumbs.className = 'breadcrumbs';
    locatorBreadcrumbs.setAttribute('aria-label', 'Breadcrumb');
    locatorBreadcrumbs.innerHTML = `
      <a href="index.html">Home</a>
      <span>/</span>
      <span aria-current="page">Store Locator</span>
    `;
    breadcrumbInner.append(locatorBreadcrumbs);
  }

  if (breadcrumbInner.children.length) {
    breadcrumbBar.append(breadcrumbInner);
    mainContent.insertBefore(breadcrumbBar, mainContent.firstChild);
  }
}

const isCityGuidePage = Boolean(mainContent?.querySelector('.city-map-section'));
if (mainContent && isCityGuidePage && !mainContent.querySelector('.locator-assurance')) {
  const cityPageTitle = mainContent.querySelector('.city-hero h1#city-title');
  if (cityPageTitle) {
    const cityPageHeading = document.createElement('h2');
    cityPageHeading.id = cityPageTitle.id;
    cityPageHeading.innerHTML = cityPageTitle.innerHTML;
    cityPageTitle.replaceWith(cityPageHeading);
  }

  const sharedAssurance = document.createElement('section');
  sharedAssurance.className = 'locator-assurance';
  sharedAssurance.setAttribute('aria-labelledby', 'assurance-title');
  sharedAssurance.innerHTML = `
    <div class="section-inner locator-assurance-layout">
      <div>
        <p class="eyebrow">Shop with confidence</p>
        <h1 id="assurance-title">Verify Authorized Retailer</h1>
      </div>
      <div class="assurance-copy">
        <p>Search by store name, phone number, or website to confirm a La Femme authorized retailer.</p>
      </div>
      <form class="assurance-search" action="#" data-assurance-search>
        <label class="sr-only" for="authorized-retailer-search">Search by store name, phone, or website</label>
        <input id="authorized-retailer-search" type="search" placeholder="Retailer, phone, website" autocomplete="off" />
        <button type="submit">Search</button>
      </form>
    </div>
  `;
  mainContent.insertBefore(sharedAssurance, mainContent.querySelector('.city-hero'));
}

if (mainContent && isCityGuidePage) {
  const cityHeroSection = mainContent.querySelector('.city-hero');
  const cityMapSection = mainContent.querySelector('.city-map-section');
  const cityHeroLayout = cityHeroSection?.querySelector('.city-hero-layout');
  if (cityHeroSection && cityMapSection && cityHeroLayout && !cityMapSection.querySelector('.city-locator-intro')) {
    const cityLocatorIntro = document.createElement('div');
    cityLocatorIntro.className = 'section-inner city-locator-intro';
    cityLocatorIntro.append(cityHeroLayout);
    const flowerLegend = document.createElement('p');
    flowerLegend.className = 'locator-flower-legend';
    flowerLegend.textContent = 'Flowers indicate the selection of dresses a store carries. More flowers means more styles.';
    cityLocatorIntro.append(flowerLegend);
    cityMapSection.insertBefore(cityLocatorIntro, cityMapSection.firstChild);
    cityHeroSection.remove();
  }
}

const locatorClassicSection = document.querySelector('.locator-classic');
const locatorAssuranceSection = document.querySelector('.locator-assurance');
const locatorAppShell = locatorClassicSection?.querySelector('.locator-app-shell');
if (locatorClassicSection && locatorAssuranceSection && locatorAppShell) {
  locatorClassicSection.before(locatorAssuranceSection);
  const locatorIntro = locatorClassicSection.querySelector('.locator-classic-intro');
  if (locatorIntro) locatorClassicSection.insertBefore(locatorIntro, locatorAppShell);
  const assuranceSearch = locatorAssuranceSection.querySelector('.assurance-search');
  const assuranceCopy = locatorAssuranceSection.querySelector('.assurance-copy');
  if (assuranceSearch && assuranceCopy) assuranceCopy.insertAdjacentElement('afterend', assuranceSearch);
}

const normalizeLocatorSearch = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

function getLocatorCitySlug(href = '') {
  return href
    .replace(/^\.\.\//, '')
    .replace(/^stores\//, '')
    .replace(/^stores-/, '')
    .replace(/\.html(?:[?#].*)?$/, '');
}

const getCityGuideOptions = () => {
  const countryLabels = {
    US: 'United States',
    AU: 'Australia',
    CA: 'Canada',
  };
  const seen = new Set();

  return Array.from(document.querySelectorAll('[data-country-panel]')).flatMap((panel) => {
    const country = countryLabels[panel.getAttribute('data-country-panel')] || '';

    return Array.from(panel.querySelectorAll('.mega-state-group')).flatMap((group) => {
      const state = group.dataset.stateName || group.querySelector('h3')?.textContent?.trim() || '';

      return Array.from(group.querySelectorAll('.mega-city-list > a')).flatMap((link) => {
        const href = link.dataset.cityHref || link.getAttribute('href');
        const city = link.textContent?.trim() || '';
        if (!href || !city || seen.has(href)) return [];
        seen.add(href);

        return [{
          href,
          label: `${city}, ${state}`,
          searchTerms: normalizeLocatorSearch(`${city} ${state} ${country}`),
        }];
      });
    });
  });
};

const populateCitySelector = (selector, selectedHref = '') => {
  if (!(selector instanceof HTMLSelectElement) || selector.dataset.citySelectorReady === 'true') return;

  const options = getCityGuideOptions();
  const defaultHref = selectedHref || selector.dataset.selectedCity || '';
  selector.replaceChildren();

  const prompt = document.createElement('option');
  prompt.value = '';
  prompt.textContent = 'Select a city';
  selector.append(prompt);

  options.forEach(({ href, label }) => {
    const option = document.createElement('option');
    option.value = href;
    option.textContent = label;
    selector.append(option);
  });

  selector.value = options.some(({ href }) => href === defaultHref) ? defaultHref : '';
  selector.dataset.citySelectorReady = 'true';
  if (!selector.closest('[data-store-search]')) {
    selector.addEventListener('change', () => {
      if (selector.value) window.location.assign(selector.value);
    });
  }
};

const enhanceCitySelectorSearch = (selector) => {
  if (!(selector instanceof HTMLSelectElement) || selector.dataset.citySearchEnhanced === 'true') return;
  const field = selector.closest('.locator-filter-field');
  if (!(field instanceof HTMLElement)) return;

  const options = getCityGuideOptions();
  const listId = `${selector.id || 'store-city'}-options`;
  const input = document.createElement('input');
  input.className = 'locator-city-combobox';
  input.type = 'search';
  input.setAttribute('list', listId);
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('placeholder', 'Search city');
  input.setAttribute('aria-label', 'Search city');

  const list = document.createElement('datalist');
  list.id = listId;
  options.forEach(({ label }) => {
    const option = document.createElement('option');
    option.value = label;
    list.append(option);
  });

  const syncInput = () => {
    const selected = options.find(({ href }) => href === selector.value);
    input.value = selected?.label || '';
  };
  const syncSelector = () => {
    const query = normalizeLocatorSearch(input.value);
    const match = options.find(({ label }) => normalizeLocatorSearch(label) === query);
    selector.value = match?.href || '';
  };

  input.addEventListener('input', syncSelector);
  input.addEventListener('change', syncSelector);
  selector.addEventListener('change', syncInput);
  selector.addEventListener('city-selector-sync', syncInput);

  field.classList.add('is-searchable-city');
  selector.classList.add('locator-native-city-select');
  selector.hidden = true;
  selector.tabIndex = -1;
  selector.setAttribute('aria-hidden', 'true');
  selector.insertAdjacentElement('afterend', list);
  selector.insertAdjacentElement('afterend', input);
  selector.dataset.citySearchEnhanced = 'true';
  syncInput();
};

const normalizePostalCode = (value = '') => String(value).replace(/[^a-z0-9]/gi, '').toUpperCase();
const postalGuideCache = new Map();
const normalizeGuideHref = (href = '') => href.replace(/^\.\.\//, '');

const isPostalCodeQuery = (value) => {
  const code = normalizePostalCode(value);
  return /^\d{4,9}$/.test(code) || /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(code);
};

const postalCodesMatch = (query, postalCode) =>
  query === postalCode || (query.length === 9 && query.slice(0, 5) === postalCode);

const findCityGuideByPostalCode = async (value) => {
  const postalCode = normalizePostalCode(value);
  if (!isPostalCodeQuery(postalCode)) return null;
  if (postalGuideCache.has(postalCode)) return postalGuideCache.get(postalCode);

  const cityOptions = getCityGuideOptions();
  const indexedPostalCode = postalCode.length === 9 ? postalCode.slice(0, 5) : postalCode;
  const indexedHref = window.LA_FEMME_POSTAL_GUIDES?.[indexedPostalCode]?.[0];
  const indexedMatch = cityOptions.find((option) => normalizeGuideHref(option.href) === indexedHref);
  if (indexedMatch) {
    postalGuideCache.set(postalCode, indexedMatch);
    return indexedMatch;
  }
  const batches = Array.from({ length: Math.ceil(cityOptions.length / 24) }, (_, index) =>
    cityOptions.slice(index * 24, index * 24 + 24),
  );

  for (const batch of batches) {
    const matches = await Promise.all(batch.map(async (option) => {
      try {
        const response = await fetch(option.href);
        if (!response.ok) return null;
        const page = await response.text();
        const structuredData = page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
        const businesses = structuredData ? JSON.parse(structuredData)['@graph'] || [] : [];
        return businesses.some((business) =>
          postalCodesMatch(postalCode, normalizePostalCode(business.address?.postalCode)),
        ) ? option : null;
      } catch {
        return null;
      }
    }));

    const match = matches.find(Boolean);
    if (match) {
      postalGuideCache.set(postalCode, match);
      return match;
    }
  }

  postalGuideCache.set(postalCode, null);
  return null;
};

const findCityGuide = async (value) => {
  if (!String(value).trim()) return null;
  const query = normalizeLocatorSearch(value);
  const cityMatch = getCityGuideOptions().find((option) => option.searchTerms.includes(query));
  return cityMatch || findCityGuideByPostalCode(value);
};

const normalizeRetailerWebsite = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]/g, '');

const findAuthorizedRetailers = (value) => {
  const query = String(value || '').trim();
  if (!query) return [];

  const nameQuery = normalizeLocatorSearch(query);
  const phoneQuery = query.replace(/\D/g, '');
  const websiteQuery = normalizeRetailerWebsite(query);

  return (window.LA_FEMME_RETAILERS || []).filter((retailer) => {
    const nameMatches = nameQuery && normalizeLocatorSearch(retailer.name).includes(nameQuery);
    const phoneMatches = phoneQuery.length >= 4 && retailer.phone.replace(/\D/g, '').includes(phoneQuery);
    const websiteMatches = websiteQuery.length >= 3 && normalizeRetailerWebsite(retailer.website).includes(websiteQuery);
    return nameMatches || phoneMatches || websiteMatches;
  });
};

const renderAuthorizationResult = (form, retailers, query) => {
  let feedback = form.parentElement?.querySelector('.assurance-search-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'assurance-search-feedback';
    feedback.setAttribute('aria-live', 'polite');
    form.insertAdjacentElement('afterend', feedback);
  }

  feedback.replaceChildren();
  if (!retailers.length) {
    const message = document.createElement('p');
    message.textContent = `We could not confirm “${query}” as an authorized retailer in this directory.`;
    feedback.append(message);
    return;
  }

  const confirmation = document.createElement('p');
  confirmation.className = 'is-authorized';
  confirmation.textContent = retailers.length === 1
    ? 'Authorized retailer confirmed.'
    : `${retailers.length} authorized retailers found.`;
  feedback.append(confirmation);

  const matches = document.createElement('div');
  matches.className = 'assurance-result-list';
  retailers.slice(0, 4).forEach((retailer) => {
    const card = document.createElement('article');
    card.className = 'locator-result-card assurance-result-card is-featured';

    const pin = document.createElement('span');
    pin.className = 'locator-pin';
    pin.setAttribute('aria-hidden', 'true');
    pin.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12 22s7-6.4 7-13A7 7 0 0 0 5 9c0 6.6 7 13 7 13Z"></path>
        <circle cx="12" cy="9" r="2.2"></circle>
      </svg>
    `;

    const content = document.createElement('div');
    const title = document.createElement('h2');
    const storeUrl = retailer.website.trim()
      ? (/^https?:\/\//i.test(retailer.website) ? retailer.website.trim() : `https://${retailer.website.trim()}`)
      : '';
    if (storeUrl) {
      const nameLink = document.createElement('a');
      nameLink.className = 'assurance-store-name';
      nameLink.href = storeUrl;
      nameLink.target = '_blank';
      nameLink.rel = 'noopener noreferrer';
      nameLink.textContent = retailer.name;
      title.append(nameLink);
    } else {
      title.textContent = retailer.name;
    }
    content.append(title);

    if (retailer.phone.trim()) {
      const phone = document.createElement('a');
      phone.href = `tel:${retailer.phone.replace(/[^+\d]/g, '')}`;
      phone.textContent = retailer.phone;
      content.append(phone);
    }

    if (storeUrl) {
      const website = document.createElement('a');
      website.className = 'assurance-result-website';
      website.href = storeUrl;
      website.target = '_blank';
      website.rel = 'noopener noreferrer';
      website.textContent = retailer.website.replace(/^https?:\/\//i, '');
      content.append(website);
    }

    card.append(pin, content);
    matches.append(card);
  });
  feedback.append(matches);
};

render(
  '[data-feed]',
  duplicate(feedItems)
    .map(
      ([label, item], index) => `
        <article class="feed-card"${index >= feedItems.length ? ' aria-hidden="true"' : ''}>
          ${image(item, index >= feedItems.length)}
          <div><span>${label}</span></div>
        </article>
      `,
    )
    .join(''),
);

render(
  '[data-collections]',
  collections
    .map(
      ([title, cta, item, size], index) => `
        <article class="collection-card collection-card-${size || 'small'}" data-reveal>
          ${image(item)}
          <div>
            <p class="eyebrow">${String(index + 1).padStart(2, '0')}</p>
            <h3>${title}</h3>
            <a class="button button-dark" href="#">${cta}</a>
          </div>
        </article>
      `,
    )
    .join(''),
);

let productStartIndex = 0;
const productWindowSize = 4;

const visibleProducts = () =>
  Array.from(
    { length: productWindowSize },
    (_, offset) => products[(productStartIndex + offset) % products.length],
  );

const renderProducts = () => {
  render(
    '[data-products]',
    visibleProducts()
      .map(
        ([name, item, swatches]) => `
          <article class="product-card">
            <div class="product-media">
              <a href="#" aria-label="View ${name}">
                ${image(item)}
              </a>
              <a class="view-product" href="#">View Product</a>
            </div>
            <div class="product-meta">
              <p class="product-name">${name}</p>
              <div class="swatch-row" aria-label="Available colors">
                ${swatches.map((color) => `<span class="swatch" style="--swatch:${color}"></span>`).join('')}
              </div>
            </div>
          </article>
        `,
      )
      .join(''),
  );
};

renderProducts();

render(
  '[data-featured-posts]',
  duplicate(featuredPosts)
    .map(
      ({ title, image: postImage }, index) => `
        <article class="featured-post" aria-label="${title}"${index >= featuredPosts.length ? ' aria-hidden="true"' : ''}>
          <a href="#" aria-label="View ${title}"${index >= featuredPosts.length ? ' tabindex="-1"' : ''}>
            ${image(postImage)}
          </a>
        </article>
      `,
    )
    .join(''),
);

render(
  '[data-store-media]',
  [images.peach, images.copper]
    .map(
      (item, index) =>
        `<picture class="stores-panel stores-panel-${index + 1}">${image(item)}</picture>`,
    )
    .join(''),
);

render(
  '[data-social-links]',
  socialLinks
    .map(([label, icon]) => `<a href="#" aria-label="${label}">${icon}</a>`)
    .join(''),
);

render(
  '[data-footer-columns]',
  footerColumns
    .map(
      ({ title, links }) => `
        <nav class="footer-column" aria-label="${title}">
          <h2>${title}</h2>
          ${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>
      `,
    )
    .join(''),
);
qualifyShellLinks(siteFooter);

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const newsletterForm = document.querySelector('[data-newsletter-form]');
const contactForm = document.querySelector('[data-contact-form]');
const storeSearchForm = document.querySelector('[data-store-search]');
const assuranceSearchForm = document.querySelector('[data-assurance-search]');
const featuredList = document.querySelector('[data-featured-posts]');
const productCarousel = document.querySelector('.product-carousel');
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

menuButton?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

nav?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  header.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
});

document.querySelectorAll('.collection-card').forEach((card) => {
  card.addEventListener('mouseenter', () => card.classList.add('is-active'));
  card.addEventListener('mouseleave', () => card.classList.remove('is-active'));
  card.addEventListener('focusin', () => card.classList.add('is-active'));
  card.addEventListener('focusout', () => card.classList.remove('is-active'));
});

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

assuranceSearchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

const cityHeroLayout = document.querySelector('.city-hero-layout');

if (cityHeroLayout && !document.querySelector('.locator-assurance') && !cityHeroLayout.querySelector('.city-hero-search')) {
  const cityHeroSearch = document.createElement('form');
  cityHeroSearch.className = 'city-hero-search';
  cityHeroSearch.innerHTML = `
    <label class="sr-only" for="city-verify-search">Search retailer name or website</label>
    <input
      id="city-verify-search"
      type="search"
      placeholder="Search retailer name or website"
    />
    <button type="submit">Verify store</button>
  `;
  cityHeroSearch.addEventListener('submit', (event) => event.preventDefault());
  cityHeroLayout.append(cityHeroSearch);
}

const locatorResultCards = Array.from(
  document.querySelectorAll('.locator-result-list > .locator-result-card'),
);

const mainCitySelector = storeSearchForm?.querySelector('[data-city-selector]');
populateCitySelector(mainCitySelector);

const mainLocatorPanel = document.querySelector('.locator-results-panel');
let locatorClearButton = null;

const setLocatorClearVisible = (isVisible) => {
  if (locatorClearButton instanceof HTMLButtonElement) locatorClearButton.hidden = !isVisible;
};

const setLocatorDirectoryVisible = (isVisible) => {
  const directory = mainLocatorPanel?.querySelector('.locator-city-directory');
  if (directory instanceof HTMLElement) directory.hidden = !isVisible;
  mainLocatorPanel?.classList.toggle('is-city-directory', isVisible);
  setLocatorClearVisible(!isVisible);
};

if (storeSearchForm && mainLocatorPanel) {
  const cityOptions = getCityGuideOptions();
  const cityDirectory = document.createElement('nav');
  cityDirectory.className = 'locator-city-directory';
  cityDirectory.setAttribute('aria-label', 'All store locator cities');
  cityDirectory.innerHTML = cityOptions
    .map(({ href, label }) => `<a href="${href}">${label}</a>`)
    .join('');

  const feedback = mainLocatorPanel.querySelector('[data-store-search-message]');
  if (feedback) {
    feedback.textContent = `Browse all ${cityOptions.length} city locations.`;
  }

  mainLocatorPanel.insertBefore(cityDirectory, mainLocatorPanel.querySelector('.locator-result-list'));
  setLocatorDirectoryVisible(true);
}

const mainLocatorResultList = mainLocatorPanel?.querySelector('.locator-result-list');
const mainLocatorFeedback = mainLocatorPanel?.querySelector('[data-store-search-message]');
const mainLocatorMap = document.querySelector('.locator-map-panel iframe');

if (mainLocatorPanel && mainLocatorFeedback) {
  const feedbackBar = document.createElement('div');
  feedbackBar.className = 'locator-feedback-bar';
  mainLocatorFeedback.before(feedbackBar);
  feedbackBar.append(mainLocatorFeedback);

  locatorClearButton = document.createElement('button');
  locatorClearButton.className = 'locator-clear-results';
  locatorClearButton.type = 'button';
  locatorClearButton.hidden = true;
  locatorClearButton.setAttribute('aria-label', 'Clear selected city');
  locatorClearButton.textContent = '×';
  feedbackBar.append(locatorClearButton);
}

const cityRetailerCache = new Map();

const getRetailerWebsiteUrl = (website = '') => {
  const value = website.trim();
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
};

const updateMapIframe = (iframe, query, title = 'Map of La Femme retailers') => {
  if (!(iframe instanceof HTMLIFrameElement) || !query) return;
  iframe.title = title;
  iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
};

const getStoreMapQuery = (name = '', address = '') =>
  [name, address]
    .map((part) => String(part || '').trim())
    .filter(Boolean)
    .join(' ');

const loadCityRetailers = async (href) => {
  if (cityRetailerCache.has(href)) return cityRetailerCache.get(href);
  const dataHref = href.replace(/^\.\.\//, '');
  const indexedRetailers = window.LA_FEMME_CITY_RETAILERS?.[dataHref];
  if (indexedRetailers) {
    cityRetailerCache.set(href, indexedRetailers);
    return indexedRetailers;
  }
  try {
    const response = await fetch(href);
    if (!response.ok) throw new Error('Unable to load city directory');
    const page = await response.text();
    const structuredData = page.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
    const retailers = structuredData ? JSON.parse(structuredData)['@graph'] || [] : [];
    cityRetailerCache.set(href, retailers);
    return retailers;
  } catch {
    cityRetailerCache.set(href, []);
    return [];
  }
};

const renderMainLocatorRetailers = async (option) => {
  if (!mainLocatorPanel || !mainLocatorResultList || !option) return;
  setLocatorDirectoryVisible(false);
  mainLocatorResultList.replaceChildren();
  if (mainLocatorFeedback) mainLocatorFeedback.textContent = `Loading authorized retailers in ${option.label}…`;

  const retailers = await loadCityRetailers(option.href);
  if (mainLocatorMap) {
    mainLocatorMap.title = `Map of La Femme retailers in ${option.label}`;
    mainLocatorMap.src = `https://www.google.com/maps?q=${encodeURIComponent(`La Femme dresses ${option.label}`)}&output=embed`;
  }

  if (mainLocatorFeedback) {
    mainLocatorFeedback.textContent = retailers.length
      ? `Showing ${retailers.length} authorized ${retailers.length === 1 ? 'retailer' : 'retailers'} in ${option.label}.`
      : `No authorized retailers are currently listed in ${option.label}.`;
  }

  retailers.forEach((retailer, index) => {
    const card = document.createElement('article');
    card.className = 'locator-result-card';
    if (index === 0) card.classList.add('is-featured');
    card.tabIndex = 0;

    const pin = document.createElement('span');
    pin.className = 'locator-pin';
    pin.setAttribute('aria-hidden', 'true');
    pin.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12 22s7-6.4 7-13A7 7 0 0 0 5 9c0 6.6 7 13 7 13Z"></path>
        <circle cx="12" cy="9" r="2.2"></circle>
      </svg>
    `;

    const content = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = retailer.name || 'Authorized retailer';
    const flowers = document.createElement('p');
    flowers.className = 'locator-flowers';
    flowers.setAttribute('aria-label', 'Store selection indicator');
    flowers.textContent = '✿ ✿ ✿ ✿ ✿';
    const address = retailer.address || {};
    const addressLine = [
      address.streetAddress,
      [address.addressLocality, address.addressRegion, address.postalCode].filter(Boolean).join(', '),
      address.addressCountry,
    ].filter(Boolean).join(', ');
    if (addressLine) {
      const addressElement = document.createElement('address');
      addressElement.textContent = addressLine;
      content.append(title, flowers, addressElement);
    } else {
      content.append(title, flowers);
    }

    if (retailer.telephone) {
      const phone = document.createElement('a');
      phone.href = `tel:${String(retailer.telephone).replace(/[^+\d]/g, '')}`;
      phone.textContent = retailer.telephone;
      content.append(phone);
    }
    if (retailer.url) {
      const website = document.createElement('a');
      website.href = getRetailerWebsiteUrl(retailer.url);
      website.target = '_blank';
      website.rel = 'noopener noreferrer';
      website.textContent = retailer.url.replace(/^https?:\/\//i, '');
      content.append(website);
    }

    const activate = () => {
      mainLocatorResultList.querySelectorAll('.locator-result-card').forEach((item) => {
        item.classList.toggle('is-featured', item === card);
      });
      const mapQuery = getStoreMapQuery(retailer.name || 'La Femme retailer', addressLine)
        || `${retailer.name || 'La Femme retailer'} ${option.label}`;
      updateMapIframe(mainLocatorMap, mapQuery, `Map of ${retailer.name || 'La Femme retailer'}`);
    };
    card.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) return;
      activate();
    });
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activate();
    });
    card.append(pin, content);
    mainLocatorResultList.append(card);
    if (index === 0) activate();
  });
};

const getLocatorAjaxHref = (href = '') => `store-locator.html?city=${getLocatorCitySlug(href)}`;

const prepareLocatorCityLinks = (root = document) => {
  root.querySelectorAll('.mega-city-list > a[href], .locator-city-directory > a[href]').forEach((link) => {
    const href = link.dataset.cityHref || link.getAttribute('href') || '';
    const slug = getLocatorCitySlug(href);
    if (!slug) return;
    link.dataset.cityHref = href;
    link.setAttribute('href', rootPathPrefix ? `${rootPathPrefix}${getLocatorAjaxHref(href)}` : getLocatorAjaxHref(href));
  });
};
prepareLocatorCityLinks(document);

const getLocatorCityOptionBySlug = (slug = '') =>
  getCityGuideOptions().find((option) => getLocatorCitySlug(option.href) === slug) || null;

const renderLocatorAjaxCity = async (option, updateHistory = false) => {
  const slug = getLocatorCitySlug(option?.href);
  if (!slug) return false;

  await renderMainLocatorRetailers(option);
  if (mainCitySelector instanceof HTMLSelectElement) {
    mainCitySelector.value = option.href;
    mainCitySelector.dispatchEvent(new Event('city-selector-sync'));
  }

  if (mainLocatorResultList && !mainLocatorResultList.querySelector('.locator-city-detail-link')) {
    const cityLink = document.createElement('a');
    cityLink.className = 'locator-city-detail-link';
    cityLink.href = option.href;
    cityLink.textContent = `View ${option.label} city page`;
    mainLocatorResultList.append(cityLink);
  }

  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set('city', slug);
    window.history.pushState({ locatorCity: slug }, '', url);
  }

  return true;
};

const resetMainLocatorDirectory = (updateHistory = false) => {
  if (!mainLocatorPanel || !mainLocatorResultList) return;
  const cityOptions = getCityGuideOptions();
  setLocatorDirectoryVisible(true);
  mainLocatorResultList.replaceChildren();
  if (mainLocatorFeedback) {
    mainLocatorFeedback.textContent = `Browse all ${cityOptions.length} city locations.`;
  }
  const locationInput = storeSearchForm?.querySelector('input[name="location"]');
  if (locationInput instanceof HTMLInputElement) locationInput.value = '';
  if (mainCitySelector instanceof HTMLSelectElement) {
    mainCitySelector.value = '';
    mainCitySelector.dispatchEvent(new Event('city-selector-sync'));
  }
  if (mainLocatorMap) {
    updateMapIframe(mainLocatorMap, 'La Femme dresses United States', 'Map of La Femme dress retailers');
  }
  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.delete('city');
    window.history.pushState({ locatorCity: '' }, '', url);
  }
};

locatorClearButton?.addEventListener('click', () => resetMainLocatorDirectory(true));

mainCitySelector?.addEventListener('change', () => {
  const option = getCityGuideOptions().find((item) => item.href === mainCitySelector.value);
  if (option) {
    renderLocatorAjaxCity(option, true);
    return;
  }
});

if (storeSearchForm && mainLocatorPanel) {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!(link instanceof HTMLAnchorElement) || link.closest('.locator-city-detail-link')) return;

    const href = link.dataset.cityHref || link.getAttribute('href') || '';
    const citySlug = new URL(link.href).searchParams.get('city') || getLocatorCitySlug(href);
    const option = getCityGuideOptions().find((item) => item.href === href)
      || getLocatorCityOptionBySlug(citySlug);
    if (!option) return;

    event.preventDefault();
    renderLocatorAjaxCity(option, true);
  });
}

const activateLocatorCard = (card) => {
  locatorResultCards.forEach((item) => item.classList.toggle('is-featured', item === card));
  const name = card.querySelector('h2')?.textContent.trim() || 'La Femme retailer';
  const address = card.querySelector('address')?.textContent.trim() || '';
  updateMapIframe(mainLocatorMap, getStoreMapQuery(name, address) || name, `Map of ${name}`);
};

locatorResultCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) return;
    activateLocatorCard(card);
  });

  card.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    activateLocatorCard(card);
  });
});

const cityMapLayout = document.querySelector('.city-map-layout');
const cityMapCopy = cityMapLayout?.querySelector('.city-map-copy');
const cityMapFrame = cityMapLayout?.querySelector('.city-map-frame');
const cityRetailerCards = Array.from(document.querySelectorAll('.retailer-card'));

if (cityMapLayout && cityMapCopy && cityMapFrame && cityRetailerCards.length) {
  const cityName =
    cityMapCopy.querySelector('.eyebrow')?.textContent.trim() || 'This city';
  const cityFilterBar = document.createElement('form');
  cityFilterBar.className = 'locator-filter-bar city-locator-filter-bar';
  cityFilterBar.innerHTML = `
    <div class="locator-filter-field locator-filter-field-wide">
      <span>Where</span>
      <label class="sr-only" for="city-store-search">Search by city, state, or ZIP/postal code</label>
      <input
        id="city-store-search"
        name="location"
        type="search"
        placeholder="Search by postcode or address"
        autocomplete="off"
      />
    </div>
    <div class="locator-filter-field">
      <span>City</span>
      <label class="sr-only" for="city-store-city">Search or select a city</label>
      <select id="city-store-city" name="city" data-city-selector></select>
    </div>
    <div class="locator-filter-field locator-category-field">
      <span>Category</span>
      <span class="locator-static-filter" aria-label="Category: Prom dresses">Prom dresses</span>
    </div>
    <button class="locator-filter-submit" type="submit" aria-label="Search stores">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5"></circle>
        <path d="m15 15 4.5 4.5"></path>
      </svg>
    </button>
  `;
  const cityPageFile = window.location.pathname.split('/').pop() || '';
  const cityPageHref = rootPathPrefix && cityPageFile
    ? `${rootPathPrefix}stores/${cityPageFile}`
    : cityPageFile;
  const cityPageSelector = cityFilterBar.querySelector('[data-city-selector]');
  populateCitySelector(cityPageSelector, cityPageHref);
  cityFilterBar.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = cityFilterBar.querySelector('input');
    const query = input?.value || '';
    const selectedCity = cityPageSelector instanceof HTMLSelectElement ? cityPageSelector.value : '';
    const match = await findCityGuide(query);

    if (query && match) {
      window.location.assign(match.href);
    } else if (selectedCity && selectedCity !== cityPageHref) {
      window.location.assign(selectedCity);
    }
  });

  const citySearchFeedback = document.createElement('p');
  citySearchFeedback.className = 'locator-search-feedback city-locator-feedback';
  citySearchFeedback.textContent = `We found ${cityRetailerCards.length} authorized ${
    cityRetailerCards.length === 1 ? 'retailer' : 'retailers'
  } near ${cityName}.`;

  const compactAddressText = (node) =>
    node.innerHTML
      .split(/<br\s*\/?>/i)
      .map((part) => part.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean)
      .join(', ');

  const cityLocatorResults = document.createElement('div');
  cityLocatorResults.className = 'city-locator-results';
  cityLocatorResults.setAttribute('aria-label', 'Retailers shown on the map');

  cityRetailerCards.forEach((card, index) => {
    const name = card.querySelector('h3')?.textContent.trim();
    const address = card.querySelector('address');
    const phone = card.querySelector('a[href^="tel:"]');
    const website = card.querySelector('.retailer-details a[href^="http"]');
    if (!name || !address) return;

    const result = document.createElement('article');
    result.className = 'locator-result-card city-locator-result';
    if (index === 0) result.classList.add('is-featured');
    result.tabIndex = 0;
    result.setAttribute('aria-label', `Show ${name} on map`);

    const marker = document.createElement('span');
    marker.className = 'locator-pin city-locator-marker';
    marker.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12 22s7-6.4 7-13A7 7 0 0 0 5 9c0 6.6 7 13 7 13Z"></path>
        <circle cx="12" cy="9" r="2.2"></circle>
      </svg>
    `;
    marker.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = name;
    const flowers = document.createElement('p');
    flowers.className = 'locator-flowers';
    flowers.setAttribute('aria-label', 'Store selection indicator');
    flowers.textContent = '✿ ✿ ✿ ✿ ✿';
    const compactAddress = document.createElement('address');
    compactAddress.textContent = compactAddressText(address);
    result.dataset.mapQuery = getStoreMapQuery(name, compactAddress.textContent);
    content.append(title, flowers, compactAddress);

    [phone, website].forEach((source) => {
      if (!source) return;
      const link = source.cloneNode(true);
      content.append(link);
    });
    result.append(marker, content);
    cityLocatorResults.append(result);
  });

  cityMapLayout.classList.add('is-city-locator', 'locator-app-shell');
  cityMapLayout.prepend(cityFilterBar);
  cityMapCopy.append(citySearchFeedback, cityLocatorResults);
  const cityLocatorCards = Array.from(
    cityLocatorResults.querySelectorAll('.city-locator-result'),
  );

  const activateCityLocatorCard = (card) => {
    cityLocatorCards.forEach((item) => item.classList.toggle('is-featured', item === card));
    updateMapIframe(
      cityMapFrame.querySelector('iframe'),
      card.dataset.mapQuery || card.querySelector('h2')?.textContent.trim() || '',
      `Map of ${card.querySelector('h2')?.textContent.trim() || 'La Femme retailer'}`,
    );
  };

  cityLocatorCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) return;
      activateCityLocatorCard(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activateCityLocatorCard(card);
    });
  });

  if (cityLocatorCards[0]) activateCityLocatorCard(cityLocatorCards[0]);
}

storeSearchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = storeSearchForm.querySelector('input');
  const message = document.querySelector('[data-store-search-message]');
  const query = input?.value || '';
  const selectedCity = mainCitySelector instanceof HTMLSelectElement ? mainCitySelector.value : '';
  if (message && isPostalCodeQuery(query)) {
    message.textContent = 'Looking up authorized retailers near that ZIP code…';
  }
  const match = await findCityGuide(query);

  if (match && query) {
    if (await renderLocatorAjaxCity(match, true)) return;
    window.location.assign(match.href);
    return;
  }

  if (selectedCity) {
    const option = getCityGuideOptions().find((item) => item.href === selectedCity);
    if (option && await renderLocatorAjaxCity(option, true)) return;
    window.location.assign(selectedCity);
    return;
  }

  if (message) {
    message.textContent = query.trim()
      ? 'No authorized retailer location matches that search yet. Browse the city list below or contact us for retailer help.'
      : 'Enter a city, state, or ZIP code to find an authorized retailer.';
  }
});

if (storeSearchForm && mainLocatorPanel) {
  const initialCitySlug = new URLSearchParams(window.location.search).get('city') || '';
  const initialCityOption = getLocatorCityOptionBySlug(initialCitySlug);
  if (initialCityOption) renderLocatorAjaxCity(initialCityOption, false);

  window.addEventListener('popstate', () => {
    const citySlug = new URLSearchParams(window.location.search).get('city') || '';
    const cityOption = getLocatorCityOptionBySlug(citySlug);
    if (cityOption) {
      renderLocatorAjaxCity(cityOption, false);
    } else {
      resetMainLocatorDirectory(false);
    }
  });
}

assuranceSearchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = assuranceSearchForm.querySelector('input');
  const query = input?.value || '';
  renderAuthorizationResult(assuranceSearchForm, findAuthorizedRetailers(query), query.trim());
});

const scrollProductFavorites = (direction) => {
  productStartIndex =
    (productStartIndex + direction + products.length) % products.length;
  renderProducts();
};

document.querySelector('[data-product-prev]')?.addEventListener('click', () => {
  scrollProductFavorites(-1);
});

document.querySelector('[data-product-next]')?.addEventListener('click', () => {
  scrollProductFavorites(1);
});

const scrollFeaturedPosts = (direction) => {
  if (!featuredList) return;
  const maxScroll = featuredList.scrollWidth - featuredList.clientWidth;
  if (maxScroll <= 0) return;

  const scrollAmount = featuredList.clientWidth * 0.72 * direction;
  const nextPosition = featuredList.scrollLeft + scrollAmount;

  if (nextPosition < 1) {
    featuredList.scrollTo({ left: maxScroll, behavior: 'smooth' });
    return;
  }

  if (nextPosition >= maxScroll - 1) {
    featuredList.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  featuredList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

document
  .querySelector('[data-featured-prev]')
  ?.addEventListener('click', () => {
    scrollFeaturedPosts(-1);
  });

document
  .querySelector('[data-featured-next]')
  ?.addEventListener('click', () => {
    scrollFeaturedPosts(1);
  });

if (reducedMotion) {
  document
    .querySelectorAll('[data-reveal]')
    .forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
  );

  document
    .querySelectorAll('[data-reveal]')
    .forEach((el) => revealObserver.observe(el));
}
