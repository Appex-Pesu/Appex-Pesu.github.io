import React from 'react'
import { graphql } from 'gatsby'
// Components
import Layout from 'components/Layout'
// Hooks
import useWindowSize from 'hooks/useWindowSize'

const Events = ({ data, ...props }) => {
  const windowSize = useWindowSize()
  const avatar = data.avatar.childImageSharp.gatsbyImageData
  const projects = data.projects.nodes || []

  return (
    <Layout navLogo={false} windowSize={windowSize}>
      <div className="mt-20">
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #000;
              color: #fff;
            }

            #image-container {
              height: 60vh;
              overflow: hidden;
              position: relative;
              text-align: center;
            }

            #image-container img {
              width: auto;
              height: 100%;
              max-width: 100%;
              object-fit: cover;
              filter: brightness(100%);
            }

            #description-container {
              padding: 20px;
              box-sizing: border-box;
              background-color: #000;
              border-radius: 10px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
              margin-top: -20px;
              text-align: center; /* Added text-align for description container */
            }

            h2 {
              color: #fff;
              border-bottom: none;
              padding-bottom: 5px;
            }

            p {
              line-height: 1.6;
              text-align: left; /* Adjusted text-align for paragraphs */
            }

            a {
              color: #3498db;
              text-decoration: none;
              font-weight: bold;
            }

            a:hover {
              color: #1f618d;
            }

            button {
              background-color: #3498db;
              color: #fff;
              padding: 10px 20px;
              font-size: 16px;
              border: none;
              cursor: pointer;
              border-radius: 5px;
            }

            button:hover {
              background-color: #1f618d;
            }
          `}
        </style>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="../notification.jpg" alt="Description of your image" />
        </div>
        <div id="description-container">
          <h2>Solve It, App It</h2>
          <p>
            Greetings!<br/><br/>
            APPEX welcomes everyone to contribute to our mission of problem-solving through technology. We're thrilled to announce our online event, "Solve It, App It", with a prize pool of Rs. 3000.<br/><br/>
            In our quest for innovative solutions, we invite app enthusiasts to contest and showcase their problem-solving skills. This is an online contest open to students from all branches and campuses of PES University. No coding required. The most distinctive ideas win exciting cash prizes!<br/><br/>
            If you're passionate about app-technology and want to participate by presenting your ideas, we invite you to pitch your app solutions at the link below:<br/>
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          {/* Added button for Register Now link */}
          <button onClick={() => window.open("https://docs.google.com/forms/d/10iH6e90jr2Vl5eX3oT9VgByzOQc8WVHkWcOxNiwaWas/edit", "_blank")}>
            Register Now
          </button>
          <br/><br/>
          <div id="description-container">
            <p>
              To know more, follow our Instagram @appex.pesu:<br/>
            </p>
          </div>
          <a href="https://www.instagram.com/appex.pesu?igsh=MWF5YzIwaDR3OGRqaA==" target="_blank">Visit for more details</a><br/><br/>
          <div id="description-container">
            <p>
              For any queries, contact:<br/>
              Sharanya G S - +91 73493 91048<br/>
              Sanjana Rathish - +91 70227 61027<br/>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const indexQuery = graphql`{
  avatar: file(relativePath: {eq: "me.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED,
        width: 800
      )
    }
  }
  projects: allMdx(
    filter: {fields: {sourceInstanceName: {eq: "projects"}}}
    sort: {fields: [frontmatter___key], order: ASC}
  ) {
    nodes {
      id
      frontmatter {
        description
        title
        link
        github
        languages
      }
    }
  }
}
`

export default Events;
