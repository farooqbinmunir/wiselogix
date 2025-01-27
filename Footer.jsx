import Link from "next/link";
import client from '@/app/config';

/* Code Start for Home page  slider banner */
export const Acf = async () => {
  const query = `
    query GetAllSliders {
      sliders {
        nodes {
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          homeSlider {
            sButtonText
            sButtonUrl
          }
        }
      }
    }
  `;

  const { sliders } = await client.request(query);

  return (
    <div>
      {sliders.nodes.map((slider, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{slider.title}</h2>
          {slider.featuredImage?.node?.sourceUrl && (
            <img
              src={slider.featuredImage.node.sourceUrl}
              alt={slider.featuredImage.node.altText || slider.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: slider.content }}
            style={{ margin: '10px 0' }}
          />
          <a
            href={slider.homeSlider.sButtonUrl}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            {slider.homeSlider.sButtonText}
          </a>
        </div>
      ))}
    </div>
  );
};
/* Code End for Home page  slider banner */

/* Footer Widgets */
export const Footer = async () => {
  const query = `query FooterWidgets {
      footerWidgets {
        footer_widget_1 {
          title
          content
        }
        footer_widget_2 {
          title
          content
        }
        footer_widget_3 {
          title
          content
        }
      }
    }
  `;

  const { footerWidgets } = await client.request(query);

  //console.log(footerWidgets);


  // Generate dynamic rendering for all available widget areas
  return (
    <footer style={{ padding: "20px", background: "#f8f9fa" }}>
      <div>
        {Object.entries(footerWidgets).map(([widgetArea, widgets], areaIndex) => (
          <div key={areaIndex} style={{ marginBottom: "40px" }}>
            <h2 style={{ textTransform: "capitalize" }}>{widgetArea.replace(/_/g, " ")}</h2>
            {widgets.length > 0 ? (
              widgets.map((widget, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <h3>{widget.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: widget.content }} />
                </div>
              ))
            ) : (
              <p>No widgets available in this area.</p>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
/* End Footer Widgets */