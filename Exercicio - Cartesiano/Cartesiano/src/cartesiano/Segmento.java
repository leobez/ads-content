/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cartesiano;

/**
 *
 * @author 0040482121003
 */
public class Segmento {

    private Ponto p1;
    private Ponto p2 ;
    
    // Construtor padrão
    public Segmento() {
        p1 = new Ponto(0, 0);
        p2 = new Ponto(0, 1);
    }
    
    // Construtor Parametrizado
    public Segmento(double x1, double y1, double x2, double y2) {
        p1 = new Ponto(x1, y1);
        p2 = new Ponto(x2, y2);
    }
    
    // Construtor de cópia
    public Segmento(Segmento sg) {
        this(sg.p1.getX(), sg.p1.getY(), sg.p2.getX(), sg.p2.getY());
    }
    
    // Métodos
    public void assign(Segmento sg) {
        p1.setXY(sg.p1.getX(), sg.p1.getY());
        p2.setXY(sg.p2.getX(), sg.p2.getY());
    }
    
    public void desloc(double dX, double dY) {
        p1.desloc(dX, dY);
        p2.desloc(dX, dY);
    }
    
    public void escale(double factor) {
        p1.escale(factor);
        p2.escale(factor);
    }
    
    public double length() {
        return p1.distance(p2);
    }
    
    public Ponto midPoint() {
        double x1 = p1.getX();
        double y1 = p1.getY();
        double x2 = p2.getX();
        double y2 = p2.getY();
        
        Ponto p = new Ponto(((x1+x2)/2),((y1+y2)/2));
        
        return p;
    }
    
    public boolean isValid() {
        // Ambos pontos estão instancidados e são diferentes entre si
        
        if (p1 == null || p2 == null) {
            return false;
        }
        
        if (p1.getX() == p2.getX() && p1.getY() == p2.getY()) {
            return false;
        }
        
        return true;
      
    }
    
    @Override
    public String toString() {  
        double x1 = p1.getX();
        double y1 = p1.getY();
        double x2 = p2.getX();
        double y2 = p2.getY();
        
        return "[(" + x1 + "," + y1 + ")(" + x2 + "," + y2 + ")]";
    }
    
    public void print() {
        System.out.println(toString());
    }
    
    
}
