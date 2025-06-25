import React from "react";
import Layout from "../components/layout";
import headshot from "../images/headshot.png";

const AboutPage = () => (
  <Layout>
    <h3>Freddy Zhang | Data Scientist | Machine Learning Engineer</h3>
    <img
      src={headshot}
      alt="Professional Headshot"
      style={{ width: "180px", borderRadius: "50%", display: "block", margin: "0 auto 2rem auto" }}
    />
    <p> 
      Welcome to my site!
    </p>  
    <p>
      I am, Freddy Zhang, a Senior Data Scientist and Machine Learning Engineer with deep industry experience at the intersection of life sciences and artificial intelligence. My career is defined by building impactful data-driven solutions that accelerate drug discovery, optimize bioprocesses, and enable smarter decision-making in pharmaceutical R&D.
    </p>
    <p>
      Currently, I work with multidisciplinary teams in designing, deploying, and scaling machine learning models for applications such as predictive analytics, automation, and digital transformation in pharma.
    </p>
    <p>
      My most recent skills include fine-tuning large language models (LLMs), building highly efficient agentic systems, and implementing Retrieval-Augmented Generation (RAG) pipelines for advanced AI applications.
    </p>
    <p>
      I am passionate about roles where I can architect robust ML systems, mentor teams, and collaborate with scientists and engineers to push the boundaries of what's possible in sciences.
    </p>
  </Layout>
);

export default AboutPage; 