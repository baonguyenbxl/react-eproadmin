import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "./pdfviewer.css"
export const DocViewer = () =>
{
  const [ numPages, setNumPages ] = useState( null );
  const [ pageNumber, setPageNumber ] = useState( 1 );

  const onDocumentLoadSuccess = ( { numPages } ) =>
  {
    setNumPages( numPages );
  };

  const goToPrevPage = () =>
    setPageNumber( pageNumber - 1 <= 1 ? 1 : pageNumber - 1 );

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  return (
    <div>
      <nav>
        <button className="pdfbutton" onClick={ goToPrevPage }>Prev</button>
        <button className="pdfbutton" onClick={ goToNextPage }>Next</button>
        <p>
          Page { pageNumber } of { numPages }
        </p>
      </nav>

      <Document 
        file="files/example.pdf"
        onLoadSuccess={ onDocumentLoadSuccess }
      >
        <Page className="pdfdocdiv" pageNumber={ pageNumber } />
      </Document>
    </div>
  );
};

