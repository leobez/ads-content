/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package autopecas;

/**
 *
 * @author leosb
 */
public class Peca {
    
    // ATRIBUTOS
    private int codigo, qtd_estoque;
    private String descricao;
    private double peso;

    // GETTERS E SETTERS
    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public int getQtd_estoque() {
        return qtd_estoque;
    }

    public void setQtd_estoque(int qtd_estoque) {
        this.qtd_estoque = qtd_estoque;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }
    
    // CONSTRUTOR
    public Peca(int codigo, int qtd_estoque, String descricao, double peso) {
        this.codigo = codigo;
        this.qtd_estoque = qtd_estoque;
        this.descricao = descricao;
        this.peso = peso;
    }
    
   // MÉTODOS
    public void imprimirPeca() {
        System.out.println("Codigo: " + codigo);
        System.out.println("Qtd em estoque: " + qtd_estoque);
        System.out.println("Descricao: " + descricao);
        System.out.println("Peso: " + peso);
        System.out.println();
    }
}
