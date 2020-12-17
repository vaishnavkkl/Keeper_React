import React from "react";
import ReactDom from "react-dom";


let footerdate= new Date().getFullYear();
export default function Footer(){
	return <footer>
		<p>@{footerdate} all rights reserved</p>
	</footer>
}

