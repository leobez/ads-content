/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cartesiano;

/**
 *
 * @author leosb
 */
public class Circulo extends Ponto {
    
    // ATRIBUTOS
    private double raio;

    // GETTERS E SETTERS
    public double getRaio() {
        return raio;
    }

    public void setRaio(double raio) {
        this.raio = raio;
    }

    // CONSTRUTORES: PADRÃO, PARAMETRIZADO, CÓPIA
    public Circulo() {
        super(0, 0);
        raio = 1;
    }
    
    public Circulo(Ponto ponto, double raio) {
        super(ponto.getX(), ponto.getY());
        this.raio = raio;
    }
    
    public Circulo(Circulo c) {
        super(c.getX(), c.getY());
        this.raio = c.getRaio();
    }
    
    // MÉTODOS
    public void assign(Circulo cl) {
        super.setXY(cl.getX(), cl.getY());
        raio = cl.getRaio();
    }
    
    @Override
    public void escale(double factor) {
        raio *= factor;
    }

    @Override
    public String toString() {
        return "(" +super.getX()+ "," +super.getY()+ "):" + raio;
    }
    
    public boolean isValid() {
        return raio > 0;
    }
    
    public double perimeter() {    
        return 2 * 3.14 * raio;
    }
    
    public double area() {
        return 3.14 * (raio*raio);
    }
}