/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package escola;

/**
 *
 * @author 0040482121003
 */
public class Regular extends Aluno{
    
    private String ra;
    private double notas[];
    private int falta_abonada;
    
    public Regular(String ra, String nome) {
        super(nome);
        this.ra = ra;
        notas = new double[2];
        falta_abonada = 0;
    }
    
    public void registrarNotas(double nota1, double nota2) {
        notas[0] = nota1;
        notas[1] = nota2;
    }
    
    public double media() {
        return ((notas[0]+notas[1])/2);
    }
    
    public void abonarFaltas(int qtd) {
        if (falta_abonada < 5) falta_abonada+=qtd;
        else System.out.printf("\n Limite de faltas abonadas foi atingido!\n");
    }
    
    @Override
    public boolean aprovado() {
        if (media() < 6.0)          return false;
        if (frequencia() < 75)    return false;
        if (falta_abonada > 5)      return false;
        
        return true;
    }
    
    @Override
    public void historico() {
        super.historico();
        System.out.printf(" RA: %s", ra);
        System.out.printf("\n Faltas abonadas: %d", falta_abonada);
        System.out.printf("\n Nota 1: %.2f ", notas[0]);
        System.out.printf("\n Nota 2: %.2f ", notas[1]);
        System.out.printf("\n Media: %.2f \n\n", media());
    }

}
