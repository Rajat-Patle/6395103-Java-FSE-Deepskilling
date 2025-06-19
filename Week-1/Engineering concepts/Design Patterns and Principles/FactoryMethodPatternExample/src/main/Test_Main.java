package main;

import documents.Document;
import factoryClass.DocumentFactory;
import factoryClass.ExcelFactory;
import factoryClass.PdfFactory;
import factoryClass.WordFactory;

public class Test_Main {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
