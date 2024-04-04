/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cartesiano;

/**
 *
 * @author leosb
 */
public class Poligono {
    
    private Ponto lista_de_pontos[];
    private int cont;
    
    public Poligono() {
        lista_de_pontos = new Ponto[50];
        cont = 0;
    }
    
    public boolean ptExist(Ponto pt) {
        for (int a=0; a<cont; a++) {
            if (lista_de_pontos[a] == pt) {
                if (lista_de_pontos[a].getX() == pt.getX() && lista_de_pontos[a].getY() == pt.getY()) {
                    return true;
                }
            }
        }
        return false;
    }
    
    public boolean addVertex(Ponto pt) {
        if (ptExist(pt)) return false;
        if (cont >= 50) return false;
        
        lista_de_pontos[cont] = pt;
        cont++;
        
        return true;
    }
    
    public boolean isValid() {
        return cont >= 3;
    }
    
    public double perimeter() {
        if (!isValid()) return -1;
        
        double p = 0;  
        for (int a=0; a<cont; a++) p += lista_de_pontos[a].distance(lista_de_pontos[(a+1)%cont]);
        
        return p;
    }
    
    public Ponto geoCenter() {
        
        double somaX=0, somaY=0;
        for (int a=0; a<cont; a++) {
            somaX += lista_de_pontos[a].getX();
            somaY += lista_de_pontos[a].getY();
        }
        somaX = somaX/cont;
        somaY = somaY/cont;
        
        return new Ponto(somaX, somaY);
    }
    
    public double distance(Poligono plg) {
        return geoCenter().distance(plg.geoCenter());
    }
    
    public void desloc(double dx, double dy) {
        for (int a=0; a<cont; a++) {
            lista_de_pontos[a].desloc(dx, dy);
        }
    }
    
    public void escale(double factor) {
        for (int a=0; a<cont; a++) {
            lista_de_pontos[a].escale(factor);
        }
    }
    
    public void print() {
        for (int a=0; a<cont; a++) {
            System.out.println(lista_de_pontos[a].toString());
        }
    }
    
    public void print(String caption) {
        System.out.println("\n" + caption);
        for (int a=0; a<cont; a++) {
            System.out.println(lista_de_pontos[a].toString());
        }
    }
    
    
}
