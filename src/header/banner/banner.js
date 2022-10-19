import "./banner.css"
import logo from "../../images/logoconseil.png"
export const Banner = () =>
{
  return ( <div className="bannerdiv">
    <text className="bannertext"><b>e-ProAdmin</b></text>
    <img className="bannerlogo" src={ logo } alt="" />
    <text className="bannertext"><b>Greffe</b></text>
  </div>)
}
