
import React from 'react'
import Page from './Page.jsx'
import PageHeader from './PageHeader.jsx'
import Prose from './Prose.jsx'
import Pre from './Pre.jsx'
import Link from './Link.jsx'

class GettingStarted extends React.Component {

  render () {
    let cdnLink = [
      'http://d2v52k3cl9vedd.cloudfront.net/basscss/',
      this.props.version,
      '/basscss.min.css'
    ].join('')
    let stylesheetLink = [
      '<link href="',
      cdnLink,
      '" rel="stylesheet">'
    ].join('')
    let next = this.props.route.next

    return (
      <Page {...this.props.route}>
        <Prose>
          <p className='h3'>Download or install from one of these sources</p>
          <Pre>npm install basscss</Pre>
          <Pre>bower install basscss</Pre>
          <Pre>git clone {this.props.repository.url}</Pre>
          <div className='py2'>
            <a href={'https://github.com/basscss/basscss/archive/v' + this.props.version + '.zip'}
              className='btn btn-primary'>
              Download Source
            </a>
          </div>
          <p>Or use the <a href={cdnLink}>CDN link</a>:</p>
          <Pre>{stylesheetLink}</Pre>
        </Prose>
        <hr className='m0' />
      </Page>
    )
  }

}

export default GettingStarted

