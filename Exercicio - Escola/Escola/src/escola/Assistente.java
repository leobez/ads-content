/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package escola;

/**
 *
 * @author 0040482121003
 */
public class Assistente extends Aluno{
    
    private String rg;
    private boolean entregou_resumo_final;

    public Assistente(String rg, String nome) {
        super(nome);
        this.rg = rg;
        entregou_resumo_final = false;
    }

    public void receberResumo() {
        entregou_resumo_final = true;
    }
    
    @Override
    public boolean aprovado() {
        if (frequencia() < 75) return false;
        if (!entregou_resumo_final) return false;
        return true; 
    }
    
    @Override
    public void historico() {
        super.historico();
        System.out.printf(" RG: %s \n", rg);
        System.out.println(" Entregou resumo: " + (entregou_resumo_final ? "sim" : "não") + "\n");
    }
}
