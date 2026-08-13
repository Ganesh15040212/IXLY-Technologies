import Layout from '../components/Layout'

export default function IshaWoocommerce() {
  return (
    <Layout title="IshaLife Ecommerce - Case Study - IXLY Technologies">
      <div className="bodybg bodybg1 bodybg2">
        <section className="container text-center banner_head details_page">
          <div className="row bgwhite">
            <div className="col-md-5 text-start det_head">
              <h3 className="highlighttext"><b>IshaLife</b><br /> Ecommerce</h3>
              <p>Healthcare and Wellness | Retail</p>
              <a href="#">View Website</a>
            </div>
            <div className="col-md-7" style={{ position: 'relative' }}>
              <img className="img15" src="/assets/img/case-study-device-frame.png" alt="" />
              <div className="wrapper">
                <img className="img16" src="/assets/img/isha-laptop-preview.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="techdetails">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Platforms</h3>
                <ul className="list-inline">
                  <li>Adobe Commerce (Magento)</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Tech Stack</h3>
                <ul className="list-inline">
                  <li>Oodo Integration</li>
                  <li>Marketing Tools Integration</li>
                  <li>Multiple Payment and Shipping Integration</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Industry</h3>
                <ul className="list-inline">
                  <li>Healthcare and Wellness | Retail</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>Introduction:</h3>
              </div>
              <div className="col-md-8">
                <ul className="list-inline">
                  <li>Isha Life USA is an extension of the Isha Foundation, a nonprofit organization founded by Sadhguru. It offers a variety of products that integrate yogic wisdom into daily life, including handmade crafts, natural body care items, herbal supplements, yoga apparel, and accessories. These offerings are designed to support individuals in their journey toward physical, mental, and spiritual well-being.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>Challenges:</h3>
              </div>
              <div className="col-md-8">
                <ul className="list-inline">
                  <li><b>Integration with Multiple Payment Gateways</b></li>
                  <li>&ndash; Managing multiple payment options (credit/debit cards, PayPal, UPI, etc.) across different regions was complex.</li>
                  <li>&ndash; Transaction failures and delays due to inconsistent payment processing.</li>
                  <li>&ndash; Lack of a unified payment solution led to difficulties in tracking payments and reconciling orders.</li>
                  <li><b>Shipment &amp; Logistics Challenges</b></li>
                  <li>&ndash; Coordinating shipments across multiple countries with varying tax and compliance requirements.</li>
                  <li>&ndash; Delayed order processing due to inefficiencies in tracking and managing inventory across warehouses.</li>
                  <li>&ndash; High shipping costs and limited carrier options affecting profitability and customer satisfaction.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>Impact</h3>
              </div>
              <div className="col-md-8">
                <ul className="list-inline">
                  <li>&bull; Increased Conversion Rates: The smoother payment process led to reduced cart abandonment and increased conversion rates.</li>
                  <li>&bull; Faster Shipments: Automated logistics and multi-carrier shipping options reduced order processing time and improved on-time deliveries.</li>
                  <li>&bull; Improved Customer Satisfaction: The integration of various payment methods and shipping solutions enhanced the overall customer experience, leading to higher customer retention and loyalty.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>Solution Offered</h3>
              </div>
              <div className="col-md-8">
                <ul className="list-inline">
                  <li><b>1. Seamless Integration with Multiple Payment Gateways</b></li>
                  <li>&bull; Magento's Payment Gateway Integration: Magento supports native integration with various payment gateways like PayPal, Stripe, and Authorize.Net, allowing Isha Life to offer multiple payment options tailored to customers' preferences.</li>
                  <li>&bull; Custom Payment Solutions: The platform allowed the development of custom payment modules, ensuring smooth transactions across regions, while maintaining local currency support.</li>
                  <li>&bull; Unified Payment System: By integrating all payment methods into Magento's backend, Isha Life could track and reconcile payments easily, enhancing both operational efficiency and customer trust.</li>
                  <li>&bull; Security and Compliance: Magento's compliance with PCI DSS standards ensured secure payment processing, minimizing the risk of fraud and enhancing customer confidence.</li>
                  <li><b>2. Efficient Shipment &amp; Logistics Management</b></li>
                  <li>&bull; Multi-Carrier Shipping Integration: Magento enabled integration with various shipping carriers like FedEx, UPS, and DHL, allowing Isha Life to offer multiple shipping options with real-time tracking and dynamic shipping rates.</li>
                  <li>&bull; Automated Shipping Rules: The system provided the ability to set up custom shipping rules based on product weight, destination, and delivery urgency, reducing manual intervention and delays.</li>
                  <li>&bull; Inventory and Order Management: Magento's advanced inventory management tools allowed Isha Life to track products in real-time across multiple warehouses, optimizing stock levels and ensuring timely delivery.</li>
                  <li>&bull; Global Shipping Compliance: The platform facilitated tax and duty calculation based on the customer's location, ensuring compliance with international shipping laws. This helped mitigate shipment delays and confusion for global customers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="prepare_bg" style={{ margin: 0, background: 'linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.82)), url(/assets/img/bg-cta-banner.png)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-9 zin">
                <h3 className="highlighttext" style={{ fontFamily: "'Poppins Regular'", fontWeight: 600, fontSize: '18px', lineHeight: '24px', letterSpacing: '0%', textTransform: 'uppercase' }}>Next Case Study</h3><br />
                <h3 style={{ fontFamily: "'Poppins Regular'", fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>Isha Life</h3>
              </div>
              <div className="col-md-3 zin">
                <a href="#" style={{ margin: 0, color: '#fff', fontFamily: 'poppins regular' }}>Next</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
