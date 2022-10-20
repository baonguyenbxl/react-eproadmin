import { useContext } from 'react';
import "./searchdoc.css"
import {InputTextRequired} from "../textrequired/textrequired"
import { SetMainComposant } from "../../../App"

export const SearchDoc = () =>
{
  const setComposant = useContext( SetMainComposant )
  const reqSent = ( <text>Requête envoyée</text> )
  // label
  const labelSearch = ( <text>Entrez numéro d'affaire</text> )
  // input field
  const inputSearch = ( <InputTextRequired /> )
  // button 
  const buttonSearch = ( <div onClick={ () => { setComposant( reqSent ) } }>Chercher</div> )

  return ( <>
    { labelSearch }<br /><br />
    { inputSearch }<br /><br />
    { buttonSearch }
  </> )
}
