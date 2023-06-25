/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public abstract class Funcionario {
    
    private String rg, nome;
    
    // Será usado pelas classes descendentes, portanto pode ser protected ou
    // utilizar de getters para acessar seu valor.
    protected double salariobase;
    
    // Pode colocar getters e setters de todos tbm, se desejável.
    public double getSalariobase() {
        return salariobase;
    }
    
    public Funcionario(String rg, String nome, double salariobase) {
        this.rg = rg;
        this.nome = nome;
        this.salariobase = salariobase;
    }
    
    // Métodos
    public abstract double salarioLiquido();
    
    public abstract void novoMes();

    public void hollerith() {
        System.out.println("RG: " + rg);
        System.out.println("Nome: " + nome);
        System.out.println("Salario base: " + salariobase);
    }
}
