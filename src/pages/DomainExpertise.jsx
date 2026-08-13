import { Fragment } from 'react'
import Layout from '../components/Layout'
import { domainExpertiseCards } from '../data/domainExpertise'

export default function DomainExpertise() {
  return (
    <Layout title="Domain Expertise - IXLY Technologies">
      <div className="bodybg bodybg1">
        <section className="container text-center banner_head">
          <h2>&quot;Expertise <b>That Matters</b>&quot;</h2>
          <p>&quot;Transforming industries with deep insights and innovative solutions.&quot;</p>
        </section>
        <section className="services container">
          <div className="row col-md-12 service_boxes domainexp">
            <div className="headertext text-center">
              <h3 className="highlighttext">Domain <b>Expertise.</b></h3>
              <p>Would you like to customize it further based on your specific industries?</p>
            </div>
            {domainExpertiseCards.map((card) => (
              <div className="col-md-3 hover-box" key={card.key}>
                {card.images.map((img, i) => (
                  <img key={i} className={img.opac ? 'opac' : undefined} src={img.src} alt="" loading="lazy" />
                ))}
                <h3>
                  {card.titleLines.map((line, i) => (
                    <Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <section className="container domainlists">
          <div className="headertext text-center">
            <h3 className="highlighttext">Tech <b>Stack</b></h3>
            <p>Would you like a more tailored version based on specific technologies?</p>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-4"><h3>Languages &amp; Platforms</h3></div>
            <div className="col-md-8 row">
              <div className="col-md-6 col-sm-6 col-auto">
                <ul>
                  <li>Node.JS</li><li>.NET C#</li><li>PHP</li><li>Python</li>
                  <li>JavaScript</li><li>Ionic</li><li>Typescript</li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-auto">
                <ul>
                  <li>SASS / LESS</li><li>Java</li><li>Swift</li><li>Objective C</li>
                  <li>Kotlin</li><li>GraphQL</li><li>Xamarin</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-4"><h3>Tools &amp;<br /> frameworks</h3></div>
            <div className="col-md-8 row">
              <div className="col-md-4 col-sm-4 col-auto">
                <ul>
                  <li>Angular</li><li>Selenium</li><li>React &bull; JMeter</li><li>Polymer</li>
                  <li>Jenkins</li><li>EmberJS</li><li>Chef</li><li>Flutter</li>
                  <li>Terraform</li><li>Docker</li><li>OpsWorks</li><li>Vagrant</li><li>Redis</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 col-auto">
                <ul>
                  <li>Protractor</li><li>Memcache</li><li>Karma</li><li>Cloudflare</li>
                  <li>Jasmine</li><li>CircleCI</li><li>Mocha</li><li>Travis</li>
                  <li>MongoDB</li><li>Twilio</li><li>MS SQL</li><li>Graylog</li><li>Firebase</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 col-auto">
                <ul>
                  <li>Papertrail</li><li>Heroku</li><li>PagerDuty</li><li>AWS &bull; Pingdom</li>
                  <li>Microsoft Azure</li><li>Page Insights</li><li>Google Cloud</li>
                  <li>Lucene</li><li>Digital Ocean</li><li>Solr</li><li>io</li><li>Sajari</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row col-md-12 dlists">
            <div className="col-md-4"><h3>Methodologies</h3></div>
            <div className="col-md-8 row">
              <div className="col-md-12 col-sm-12 col-auto">
                <ul>
                  <li>Services Oriented Architecture</li><li>Continuous Integration</li>
                  <li>Micro Services</li><li>Rapid Prototyping</li>
                  <li>Responsive</li><li>Mobile first</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="prepare_bg">
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-9 zin"><h3>Preparing For Your Business.<br />Success With IT Solution</h3></div>
              <div className="col-md-3 zin"><a href="#">Meet With Us</a></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
