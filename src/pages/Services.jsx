import Layout from '../components/Layout'
import { homeServiceBoxes } from '../data/homeServiceBoxes'

export default function Services() {
  return (
    <Layout title="Ecommerce Website Development Company in India">
      <div className="bodybg bodybg1">
        <section className="container text-center banner_head">
          <h2>We Provide World Class<br /><span>Software Services</span></h2>
        </section>
        <section className="services container">
          <div className="row col-md-12 service_boxes">
            {homeServiceBoxes.map((service) => (
              <div className="col-md-3 hover-box" key={service.key}>
                <img src={service.icon} alt="" loading="lazy" />
                <img className="opac" src={service.iconHover} alt="" loading="lazy" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="service_details">
          <div className="container">
            <div className="single_service" id="ecommerce">
              <img src="/assets/img/Online Shopping_1.gif" alt="E-Commerce" loading="lazy" />
              <div className="content">
                <h3>E-Commerce</h3>
                <ul className="list-inline lists">
                  <li>Custom eCommerce Website Development – Build tailored online stores with a seamless user experience.</li>
                  <li>Magento, Shopify &amp; WooCommerce Development – Develop and optimize eCommerce stores on popular platforms.</li>
                  <li>eCommerce Website Redesign – Improve design, performance, and usability for better conversions.</li>
                  <li>B2B &amp; B2C eCommerce Solutions – Develop tailored platforms for businesses and individual consumers.</li>
                  <li>Custom Mobile App Development – Build Android &amp; iOS apps for a smooth shopping experience.</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/tech-magento-icon.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-shopify-icon.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-woocommerce-icon.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-b2b-ecommerce.png" style={{ height: '50px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-mobile-app.png" alt="" loading="lazy" /></li>
                </ul>
              </div>
            </div>
            <div className="single_service" id="cloud">
              <img src="/assets/img/Cloud.gif" alt="Cloud" loading="lazy" />
              <div className="content">
                <h3>Cloud</h3>
                <ul className="list-inline lists">
                  <li>Cloud Consulting &amp; Strategy – Expert guidance on cloud adoption, migration, and optimization.</li>
                  <li>Cloud Infrastructure Setup – Deploy scalable and secure cloud environments for businesses.</li>
                  <li>Cloud Migration Services – Seamless migration of applications, data, and workloads to the cloud.</li>
                  <li>Cloud Application Development – Build, deploy, and manage cloud-native applications.</li>
                  <li>Serverless Computing Solutions – Develop applications without managing server infrastructure.</li>
                  <li>Cloud Security &amp; Compliance – Implement advanced security measures and compliance frameworks.</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/azure.png" alt="Azure" loading="lazy" /></li>
                  <li><img src="/assets/img/google.png" alt="Google" loading="lazy" /></li>
                  <li><img src="/assets/img/dev.png" alt="Dev" loading="lazy" /></li>
                </ul>
              </div>
            </div>
            <div className="single_service" id="aimachine">
              <img src="/assets/img/ArtificialIntelligence.gif" alt="AI ML" loading="lazy" />
              <div className="content">
                <h3>AI &amp; Machine Learning Service</h3>
                <ul className="list-inline lists">
                  <li>AI Consulting &amp; Strategy – Expert guidance on AI adoption, use cases, and implementation.</li>
                  <li>Custom AI Development – Tailored AI solutions to enhance business efficiency and automation.</li>
                  <li>Machine Learning Model Development – Build and train ML models for data-driven decision-making.</li>
                  <li>AI-Powered Chatbots &amp; Virtual Assistants – Intelligent customer support and automation bots.</li>
                  <li>AI in eCommerce &amp; Personalization – AI-based product recommendations and customer behavior analysis.</li>
                  <li>AI-Powered Data Analytics – Real-time insights and business intelligence solutions.</li>
                  <li>AI Model Deployment &amp; Optimization – Scalable and efficient AI model deployment for businesses.</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/tech-ai-strategy.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-custom-ai.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-machine-learning.png" style={{ height: '60px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-ai-chatbot.png" alt="" loading="lazy" /></li>
                </ul>
              </div>
            </div>
            <div className="single_service" id="iot">
              <img src="/assets/img/smarthouse.gif" alt="IOT" loading="lazy" />
              <div className="content">
                <h3>IOT</h3>
                <ul className="list-inline lists">
                  <li>IoT Consulting &amp; Strategy – Expert guidance on IoT adoption, architecture, and implementation.</li>
                  <li>Custom IoT Solution Development – Tailored IoT applications for business automation and efficiency.</li>
                  <li>IoT Device Integration – Seamless connectivity between IoT devices and cloud infrastructure.</li>
                  <li>Industrial IoT (IIoT) Solutions – Smart factory automation, predictive maintenance, and real-time monitoring.</li>
                  <li>IoT Data Analytics &amp; AI Integration – Advanced analytics for predictive insights and AI-driven automation.</li>
                  <li>IoT App Development – Web and mobile applications for controlling and monitoring IoT devices.</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/tech-custom-ai.png" alt="" loading="lazy" /></li>
                </ul>
              </div>
            </div>
            <div className="single_service" id="microservices">
              <img src="/assets/img/Cp_neuralnetwork.gif" alt="Microservices" loading="lazy" />
              <div className="content">
                <h3>Microservices</h3>
                <ul className="list-inline lists">
                  <li>Microservices Consulting &amp; Strategy – Expert guidance on transitioning to a microservices architecture.</li>
                  <li>Custom Microservices Development – Build modular, scalable, and independent services tailored to business needs.</li>
                  <li>API Development &amp; Integration – Design and implement RESTful &amp; GraphQL APIs for seamless communication.</li>
                  <li>Microservices Architecture Design – Develop a flexible and resilient architecture for high availability.</li>
                  <li>Testing &amp; Debugging Microservices – Implement unit, integration, and contract testing with tools like Postman, Jest, and Cypress</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/tech-custom-ai.png" style={{ height: '32px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-microservices-1.png" style={{ height: '59px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-microservices-2.png" style={{ height: '59px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-microservices-3.png" style={{ height: '32px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-microservices-4.png" alt="" loading="lazy" /></li>
                </ul>
              </div>
            </div>
            <div className="single_service" id="teams">
              <img src="/assets/img/19-laptop.gif" alt="Dedicated Teams" loading="lazy" />
              <div className="content">
                <h3>Dedicated Development Teams</h3>
                <ul className="list-inline lists">
                  <li>Custom Dedicated Team Setup – Assemble a team of skilled developers, designers, and project managers tailored to your project needs.</li>
                  <li>Expertise Across Technologies – Dedicated teams for web development, mobile apps, Microsoft Technologies, Java, Python, Front end, Full Stack, AI, cloud, IoT, DevOps, and more.</li>
                  <li>Project-Based &amp; Long-Term Collaboration – Teams available for short-term projects or ongoing development needs.</li>
                  <li>End-to-End Development Support – From planning and design to development, testing, and deployment.</li>
                  <li>Cost-Effective Development Model – Save on overhead costs with a dedicated offshore or remote team.</li>
                </ul>
                <ul className="list-inline lists_img">
                  <li><img src="/assets/img/tech-mobile-app.png" style={{ height: '32px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-react.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-dotnet.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-java.png" style={{ height: '59px' }} alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-microservices-3.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-python.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-ai-strategy.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-devops.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-devops.png" alt="" loading="lazy" /></li>
                  <li><img src="/assets/img/tech-team-cloud.png" alt="" loading="lazy" /></li>
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
