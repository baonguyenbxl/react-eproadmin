import { useContext } from "react";
import "./menu.css"
import { DataTable } from "../components/datagrid/datagrid"
import { SetMainComposant } from "../../App"

// Nouvelles affaires
const newCases = [
  { id: 'ep/ye-23354', numero: '232377', lastpiece: 'Mémoire en réplique / ampliatif', datepiece: '30.09.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/ny-29092', numero: '54942', lastpiece: 'Divers - Greffe', datepiece: '10.10.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/bl-28950', numero: '54908', lastpiece: 'Courrier Pré-GAD •', datepiece: '04.10.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/xy-28832', numero: 'pGD 54868', lastpiece: 'Divers - Greffe', datepiece: '12.09.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/ev-29182', numero: 'ep/ev-29182', lastpiece: 'Requête en annulation et demande de suspension', datepiece: '19.10.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/ae-29179', numero: 'ep/ae-29179', lastpiece: 'Requête en annulation', datepiece: '18.10.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/ic-29075', numero: 'ep/ic-29075', lastpiece: 'Requête en cassation •', datepiece: '06.10.2022', etat: 'Attente nr. rôle' },
  { id: 'ep/lp-26078', numero: 'ep/lp-26078', lastpiece: 'Requête en annulation', datepiece: '13.10.2022', etat: 'Attente nr. rôle' },
];

// Récemment consultées
const lastViewed=[{id:'ep/xy-28832',numero:	'pGD 54868',lastpiece:	'Divers - Greffe', datepiece:	'12.09.2022', etat:	'Attente nr. rôle'},
{id:'ep/ev-29182',numero:	'ep/ev-29182', lastpiece:	'Requête en annulation et demande de suspension', datepiece:'19.10.2022',etat:	'Annulé'},
 {id:'ep/ae-29179',numero:	'ep/ae-29179', lastpiece:	'Requête en annulation', datepiece:	'18.10.2022',etat:	'Attente nr. rôle'},
{id:'ep/ic-29075',numero:	'ep/ic-29075',lastpiece:	'Requête en cassation •', datepiece:	'06.10.2022',etat:	'Attente nr. rôle'},
{id:'ep/lp-26078',numero:	'ep/lp-26078', lastpiece:	'Requête en annulation', datepiece:	'13.10.2021', etat:	'Attente nr. rôle'}
]

// A traiter
const toDo = [
  { id: 'ep/xl-1635', numero: 'GAD 999999', lastpiece: 'Divers - Greffe', datepiece: '27.12.2021', etat: 'Incomplet' },
  { id: 'ep/ox-29058', numero: 'G/A 237.413', lastpiece: 'Divers', datepiece: '09:14', etat: 'Attente validation' },
  { id: 'ep/cp-28997', numero: 'G/A 237.358', lastpiece: 'Récusation', datepiece: '12:51', etat: 'Attente validation' },
  { id: 'ep/he-28507', numero: 'G/A 236.933', lastpiece: "Retrait d'acte •", datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/kk-28506', numero: 'G/A 236.932', lastpiece: "Retrait d'acte •", datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/nh-28482', numero: 'G/A 236.912', lastpiece: 'Dossier Administratif', datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/jy-28453', numero: 'G/A 236.882', lastpiece: "Retrait d'acte •", datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/dx-28404', numero: 'G/A 236.842', lastpiece: 'Dossier Administratif', datepiece: '17.10.2022', etat: 'Attente validation' },
  { id: 'ep/hj-28349', numero: 'G/A 236.791', lastpiece: "Note d'observations", datepiece: "18.10.2022", etat: 'Attente validation' },
  { id: 'ep/wz-28285', numero: 'G/A 236.745', lastpiece: 'Mémoire en réplique / ampliatif', datepiece: '16.10.2022', etat: 'Attente validation' },
  { id: 'ep/pv-28044', numero: 'G/A 236.545', lastpiece: 'Mémoire en intervention •', datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/zl-28024', numero: 'G/A 236.528', lastpiece: 'Mémoire en intervention •', datepiece: '17.10.2022', etat: 'Attente validation' },
  { id: 'ep/dl-28016', numero: 'G/A 236.523', lastpiece: 'Mémoire en réplique / ampliatif', datepiece: '14:05 (18 min)', etat: 'Attente validation' },
  { id: 'ep/di-27668', numero: 'G/A 236.222', lastpiece: 'Mémoire en intervention •', datepiece: '18.10.2022', etat: 'Attente validation' },
  { id: 'ep/oq-27623', numero: 'G/A 236.171', lastpiece: 'Demande de poursuite de la procédure (requérant) •', datepiece: '13.10.2022', etat: 'Attente validation' },
  { id: 'ep/hg-26492', numero: 'G/A 235.146', lastpiece: 'Demande de poursuite de la procédure (requérant) •', datepiece: '17.10.2022', etat: 'Attente validation' },
  { id: 'ep/ep-25866', numero: 'G/A 234.576', lastpiece: 'Mémoire en intervention •', datepiece: '10.10.2022', etat: 'Attente validation' },
  { id: 'ep/re-18462', numero: 'G/A 228.005', lastpiece: 'Dernier mémoire', datepiece: '17.10.2022', etat: 'Attente validation' },
  { id: 'ep/hj-15253', numero: 'G/A 225.004', lastpiece: 'Dernier mémoire', datepiece: '15.10.2022', etat: 'Attente validation' },
  { id: 'ep/ca-28941', numero: 'GAD 101959', lastpiece: 'Courrier GAD', datepiece: '26.09.2022', etat: 'Attente validation' },
  { id: 'ep/wg-28874', numero: 'pGD 54889', lastpiece: 'Courrier Pré-GAD •', datepiece: '16.09.2022', etat: 'Attente validation' },
  { id: 'ep/pg-28287', numero: 'pGD 54709', lastpiece: 'Requête en annulation', datepiece: '01.08.2022', etat: 'Attente validation' } ];

export const Menu = () =>
{
  const setComposant = useContext( SetMainComposant )

  return ( <div className="menudiv">
    <div className="iconlink" onClick={ () => { setComposant(<></> ) } }>
      <i className="fa">&#xf06e;</i><br />
      <label>Accès rapide</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={ lastViewed } /> ) } }>
      <i className="fas">&#xf5da;</i><br />
      <label>Récemment consultées</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={newCases}/> ) } }>
      <i className="fab">&#xf212;</i><br />
      <label>Nouvelles affaires</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <DataTable data={ toDo } /> ) } }>
      <i className="fa">&#xf233;</i><br />
      <label>A traiter</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fa">&#xf208;</i><br />
      <label>GAD</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fa">&#xf079;</i><br />
      <label>pre-GAD</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fa">&#xf153;</i><br />
      <label>Attente paiement</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fa">&#xf252;</i><br />
      <label>En attente</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fas">&#xf071;</i><br />
      <label>Non confirmé</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fas">&#xf573;</i><br />
      <label>Affaires clôturées</label>
    </div>
    <div className="iconlink" onClick={ () => { setComposant( <></> ) } }>
      <i className="fas">&#xf2ed;</i><br />
      <label>Corbeille</label>
    </div>
  </div> )
}
