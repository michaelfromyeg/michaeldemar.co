import React from "react"

const IndexFooter = () => {
  return (
    <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
      © Michael DeMarco {new Date().getFullYear()}
      <br />
      Built with love, sweat, tears, oh and of course{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </footer>
  )
}

export default IndexFooter
