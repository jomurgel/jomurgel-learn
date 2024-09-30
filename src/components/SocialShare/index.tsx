'use client'

import { ReactElement } from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from 'react-share'

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ( { url, title } ): ReactElement => (
  <aside data-type="social-share">
    <nav>
      <ul>
        <li className="email">
          <EmailShareButton url={url} subject={title} resetButtonStyle={false}>
            Email
          </EmailShareButton>
        </li>
        <li className="facebook">
          <FacebookShareButton url={url} resetButtonStyle={false}>
            Facebook
          </FacebookShareButton>
        </li>
        <li className="linkedin">
          <LinkedinShareButton url={url} resetButtonStyle={false}>
            Linkedin
          </LinkedinShareButton>
        </li>
        <li className="reddit">
          <RedditShareButton url={url} title={title} resetButtonStyle={false}>
            Reddit
          </RedditShareButton>
        </li>
        <li className="tumblr">
          <TumblrShareButton url={url} resetButtonStyle={false}>
            Tumblr
          </TumblrShareButton>
        </li>
        <li className="x">
          <TwitterShareButton url={url} title={title} resetButtonStyle={false}>
            X
          </TwitterShareButton>
        </li>
      </ul>
    </nav>
  </aside>
)

export default ShareButton
