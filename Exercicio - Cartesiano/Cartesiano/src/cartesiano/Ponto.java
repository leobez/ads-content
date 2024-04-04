/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cartesiano;

/**
 *
 * @author 0040482121003
 */

public class Ponto {
    
    // Atributos     
    private double x, y;

    // Getters e Setters
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }
    
    // Construtor padrão
    public Ponto() {
        x = 0;
        y = 0;
    }
    
    // Construtor parametrizado
    public Ponto(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    // Construtor de cópia
    public Ponto(Ponto p) {
        this(p.x, p.y);
    }
    
    // Métodos
    public void setXY(double newX, double newY) {        
        x = newX;
        y = newY;
    }
    
    public void assign(Ponto pt) {
        // setXY(newX, newY) -> tbm funciona
        x = pt.x;
        y = pt.y;
    }
    
    public double deltaX(double vX) {     
        return vX - x; 
    }
    
    public double deltaY(double vY) {     
        return vY - y; 
    }
    
    public double distance(double posX, double posY) {
        double dx = deltaX(posX);
        double dy = deltaY(posY);
        return Math.sqrt(dx*dx + dy*dy);   
    }
    
    // Sobrecarga - Parametro é outro ponto
    public double distance(Ponto pt) {
        return distance(pt.getX(), pt.getY());
    }
    
    // Sobrecarga - Sem parametros, pois retorna a distancia da origem (0,0)
    public double distance() {
        return distance(0, 0);
    }
    
    public void desloc(double dX, double dY) {
        x += dX;
        y += dY;
    }
    
    public void escale(double factor) {
        x *= factor;
        y *= factor;
    }

    @Override
    public String toString() {
        return "(" + x + "," + y + ")";
    }
    
    public void print() {
        System.out.println(toString());
    }
    
    public void print(String caption) {
        System.out.println(caption + " " + toString());
    }
}
