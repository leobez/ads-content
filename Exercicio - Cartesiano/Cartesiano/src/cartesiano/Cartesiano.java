/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package cartesiano;

/**
 *
 * @author 0040482121003
 */
public class Cartesiano {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        // -- TESTES --
        
        // PONTO
        System.out.println("TESTES DA CLASSE: PONTO");
        
        Ponto ponto_1 = new Ponto();
        Ponto ponto_2 = new Ponto(1, 1);
        System.out.println("ponto_2 -> original: " + ponto_2.toString());

        ponto_2.setXY(2, 2);
        System.out.println("ponto_2 -> X setado para 2: " + ponto_2.getX());
        System.out.println("ponto_2 -> Y setado para 2: " + ponto_2.getY());
        
        System.out.println("ponto_2 -> deltaX: " + ponto_2.deltaX(10));
        System.out.println("ponto_2 -> deltaY: " + ponto_2.deltaY(10));

        System.out.println("ponto_2 -> distancia do ponto (2,5): " + ponto_2.distance(2, 5));
        System.out.println("ponto_2 -> distancia do ponto_1: " + ponto_2.distance(ponto_1));
        
        ponto_2.desloc(4, 5);
        System.out.println("ponto_2 -> deslocando em (4,5): " + ponto_2.toString());
        
        ponto_2.escale(3);
        System.out.println("ponto_2 -> escalonando em 3: " + ponto_2.toString());
        
        System.out.println();


        // SEGMENTO
        System.out.println("TESTES DA CLASSE: SEGMENTO");
        
        Segmento segmento_1 = new Segmento(0,0,0,0);
        Segmento segmento_2 = new Segmento(1, 1, 2, 2);
        System.out.println("segmento_2 -> original: " + segmento_2.toString());

        segmento_2.desloc(4, 5);
        System.out.println("segmento_2 -> deslocando (4,5): " + segmento_2.toString());

        segmento_2.escale(3);
        System.out.println("segmento_2 -> escalonando em 3: " + segmento_2.toString());
        
        System.out.println("segmento_2 -> tamanho: " + segmento_2.length());
        
        System.out.println("segmento_2 -> ponto central: " + segmento_2.midPoint().toString());
        
        System.out.println("segmento_2 -> is valid?: " + segmento_2.isValid());
        System.out.println("segmento_1 -> is valid?: " + segmento_1.isValid());

        System.out.println();

        
        // CIRCULO
        System.out.println("TESTES DA CLASSE: CIRCULO");
        
        Circulo circulo_1 = new Circulo();
        
        Ponto ponto_circulo_2 = new Ponto(1, 2);
        Circulo circulo_2 = new Circulo(ponto_circulo_2, 1);
        
        Circulo circulo_2_copia = new Circulo(circulo_2);

        System.out.println("circulo_1 -> original: " + circulo_1.toString());
        System.out.println("circulo_2 -> original: " + circulo_2.toString());
        System.out.println("circulo_2_copia -> original: " + circulo_2_copia.toString());
        
        System.out.println("circulo_1 -> isValid?: " + circulo_1.isValid());
        System.out.println("circulo_2 -> isValid?: " + circulo_2.isValid());
        System.out.println("circulo_2_copia -> isValid?: " + circulo_2_copia.isValid());

        circulo_2.escale(3);
        System.out.println("circulo_2 -> escalonado em 3: " + circulo_2.toString());
        
        System.out.println("circulo_1 -> perimetro: " + circulo_1.perimeter());
        System.out.println("circulo_1 -> area: " + circulo_1.area());
        
        System.out.println("circulo_2 -> perimetro: " + circulo_2.perimeter());
        System.out.println("circulo_2 -> area: " + circulo_2.area());
        
        System.out.println();
         

        // POLIGONO
        System.out.println("TESTES DA CLASSE: POLIGONO");
        System.out.println();

    }
}
