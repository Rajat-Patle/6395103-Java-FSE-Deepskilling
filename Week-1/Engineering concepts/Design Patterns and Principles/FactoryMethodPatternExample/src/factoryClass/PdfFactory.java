package factoryClass;

import documents.Document;
import documents.PDFDocument;

public class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PDFDocument();
    }
}
