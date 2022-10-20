import { useContext } from "react";
import "./menu.css"
// datagrid
import { DataTable } from "../components/datagrid/datagrid"
// search fields
import { SearchDoc } from "../components/searchdoc/searchdoc";

import { AffaireTimeline } from "../components/timeline/timeline";

import { DocViewer } from "../components/pdfviewer/pdfviewer";

import donnees from "../../jsons/ga236833.json"

// context set main composant
import { SetMainComposant } from "../../App"

import {AttentePaiement,AffairesCloturees,NonConfirmees, AccesRapide, GAD, PreGAD, NouvellesAffaires, ATraiter, RecemmentConsultees, Corbeille, EnAttente} from "./icons"

// Nouvelles affaires
import newCases from "../../jsons/newcases.json";

// Récemment consultées
import lastViewed from "../../jsons/lastviewed.json"

// A traiter
import toDo from "../../jsons/todo.json"



export const Menu = () =>
{
  const setComposant = useContext( SetMainComposant )

  return ( <div className="menudiv">
    <div className="iconlink" onClick={ () => { setComposant( <SearchDoc /> ) } }>
      <AccesRapide fontSize="large" /><br />
      <label>Accès rapide</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={ lastViewed } /> ) } }>
      <RecemmentConsultees fontSize="large" /><br />
      <label>Récemment consultées</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={newCases}/> ) } }>
      <NouvellesAffaires fontSize="large"/><br />
      <label>Nouvelles affaires</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={ toDo } /> ) } }>
      <ATraiter fontSize="large" /><br />
      <label>A traiter</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <AffaireTimeline data={donnees} /> ) } }>
      <GAD fontSize="large" /><br />
      <label>GAD</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DocViewer /> ) } }>
      <PreGAD fontSize="large" /><br />
      <label>pre-GAD</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <AttentePaiement fontSize="large" /><br />
      <label>Attente paiement</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <EnAttente fontSize="large" /><br />
      <label>En attente</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <NonConfirmees fontSize="large" /><br />
      <label>Non confirmé</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <AffairesCloturees fontSize="large" /><br />
      <label>Affaires clôturées</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <Corbeille fontSize="large" /><br />
      <label>Corbeille</label>
    </div>
  </div> )
}
