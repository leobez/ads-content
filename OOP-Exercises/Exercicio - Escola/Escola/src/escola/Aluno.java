/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package escola;

/**
 *
 * @author 0040482121003
 */
public abstract class Aluno {
    
    private String nome;
    private int qtd_faltas;
    
    public Aluno(String nome) {
        this.nome = nome;
        qtd_faltas = 0;
    }
    
    public void registrarFaltas(int qtd) {
        qtd_faltas+=qtd;
    }
    
    public double frequencia() {
        return (((60-qtd_faltas)*100)/60);
    }
    
    public abstract boolean aprovado();
    
    public void historico() {
        System.out.printf(" Nome: %s ", nome);
        System.out.printf("\n Frequencia : %.2f \n", frequencia());
        System.out.println(" Aprovado : " + (aprovado() ? "sim" : "não") );
    }
    
}
