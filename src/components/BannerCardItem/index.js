// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList
  return (
    <li className={`${className} container-fluid`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="head-title">{description}</p>
        <button className="show-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default ReusableBanner
