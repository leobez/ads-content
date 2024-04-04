/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class Vendedor extends Funcionario {

    private double totalVendas;
    
    public Vendedor(String rg, String nome, double salariobase) {
        super(rg, nome, salariobase);
        totalVendas=0;
    }

    @Override
    public double salarioLiquido() {
        // Pode-se criar um método comissao(){return totalVendas*0.03;}
        // Para fins de praticidade tbm.

        return getSalariobase() + totalVendas*0.03;
    }
 
    @Override
    public void novoMes() {
        totalVendas=0;
    }
    
    public void registrarVenda(double valor) {
        totalVendas+=valor;
    }
    
    @Override
    public void hollerith() {
        super.hollerith();
        System.out.printf("Valor total vendas: %.2f \n" , totalVendas);
        System.out.printf("Valor adicionado ao salario: %.2f \n" , totalVendas*0.03);
        System.out.printf("Salario liquido: %.2f \n" , salarioLiquido());
        System.out.println("");
    }

}
