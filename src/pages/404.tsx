/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function FourOhFour() {
  return <>
<link rel="shortcut icon" href="/a.jpg" type="image/x-icon" />
<center>
<img src="/404.jpg" alt="404" />
</center>
{/* Text Sorry Start */}
<center>
<h1 className="text-3xl">OPPS ,Some Thing Went Wrong</h1>
    </center> 
    <br /><br />  
<center>

<Link  href="/">
  <h1 className="bg-red-400 w-40 h-7 rounded-2xl hover:shadow-stone-500 shadow-2xl">Go To Back</h1></Link>

</center>
  </>
}