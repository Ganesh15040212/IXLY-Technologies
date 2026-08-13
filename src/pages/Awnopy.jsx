import Layout from '../components/Layout'

export default function Awnopy() {
  return (
    <Layout title="Awnopy Ecommerce - Case Study - IXLY Technologies">
      <div className="bodybg bodybg1 bodybg2">
        <section className="container text-center banner_head details_page">
          <div className="row bgwhite">
            <div className="col-md-5 text-start det_head">
              <h3 className="highlighttext"><b>Awnopy</b><br /> Ecommerce</h3>
              <p>Retail and Manufacturing</p>
              <a href="#">View Website</a>
            </div>
            <div className="col-md-7" style={{ position: 'relative' }}>
              <img className="img15" src="/assets/img/case-study-device-frame.png" alt="" />
              <div className="wrapper">
                <img className="img16 img20" src="/assets/img/awnopy-laptop-preview.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="techdetails">
          <div className="container">
            <div className="row">
              <div className="col-md-4"><h3>Platforms</h3><ul className="list-inline"><li>Adobe Commerce (Magento)</li></ul></div>
              <div className="col-md-4"><h3>Tech Stack</h3><ul className="list-inline"><li>GraphQL</li><li>Next.JS</li><li>PWA</li></ul></div>
              <div className="col-md-4"><h3>Industry</h3><ul className="list-inline"><li>Retail and Manufacturing</li></ul></div>
            </div>
            <div className="row">
              <div className="col-md-4"><h3>Introduction:</h3></div>
              <div className="col-md-8"><ul className="list-inline"><li>Awnopy provides a range of unique shading, decor and safety solutions which are ideal for outdoors as well as indoors.</li></ul></div>
            </div>
            <div className="row">
              <div className="col-md-4"><h3>Challenges:</h3></div>
              <div className="col-md-8"><ul className="list-inline"><li>Limited Product Customization</li><li>Slow Website Load Time results in less traffic eventually less sales.</li></ul></div>
            </div>
            <div className="row">
              <div className="col-md-4"><h3>Solution Offered</h3></div>
              <div className="col-md-8">
                <ul className="list-inline">
                  <li><b>1. Advanced Product Customization</b></li>
                  <li>&bull; Integrated dynamic product configurators to allow customers to personalize shading and d&eacute;cor solutions based on size, material, color, and design.</li>
                  <li>&bull; Developed a real-time preview feature using Next.js, enabling customers to visualize customizations before purchasing.</li>
                  <li>&bull; Enhanced the GraphQL API to ensure seamless data retrieval for product variants and pricing calculations.</li>
                  <li><b>2. Performance Optimization for Faster Load Times</b></li>
                  <li>&bull; Migrated to a headless architecture with Next.js and GraphQL to improve performance and responsiveness.</li>
                  <li>&bull; Implemented server-side rendering (SSR) and static site generation (SSG) to load pages instantly, reducing bounce rates.</li>
                  <li>&bull; Optimized image loading and caching strategies, ensuring high-quality visuals without sacrificing speed.</li>
                  <li>&bull; Enabled Progressive Web App (PWA) capabilities, allowing for a faster, app-like experience across mobile and desktop devices.</li>
                  <li><b>3. Seamless User Experience &amp; Increased Sales</b></li>
                  <li>&bull; Improved checkout speed and introduced a frictionless, one-step checkout process.</li>
                  <li>&bull; Optimized SEO and Core Web Vitals to improve search engine rankings and organic traffic.</li>
                  <li>&bull; Enhanced mobile responsiveness to ensure a smooth shopping experience on all devices.</li>
                  <li><b>Impact</b></li>
                  <li>&bull; Increased customer engagement due to improved customization options.</li>
                  <li>&bull; 70% faster website load times, leading to higher conversion rates.</li>
                  <li>&bull; Boosted sales and reduced cart abandonment by optimizing checkout performance.</li>
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
                <h3 style={{ fontFamily: "'Poppins Regular'", fontWeight: 600, fontSize: '24px', lineHeight: '100%', letterSpacing: '0%' }}>Awnopy</h3>
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
