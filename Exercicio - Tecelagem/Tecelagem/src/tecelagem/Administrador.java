/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class Administrador extends Funcionario {
    
    private int faltas;
    
    public Administrador(String rg, String nome, double salariobase) {
        super(rg, nome, salariobase);
        faltas = 0;
    }

    @Override
    public double salarioLiquido() {
        
        // Pode criar um método separadao para calcular os descontos, tipo:
        // calcularDescontos() {return (getSalariobase()/30)*faltas;}
        // Esse método seria privado pois só seria usado nessa classe
        
        return getSalariobase() - ((getSalariobase()/30)*faltas);
    }

    @Override
    public void novoMes() {
        faltas = 0;
    }

    public void registrarFalta() {
        faltas++;
    }  

    @Override
    public void hollerith() {
        super.hollerith();
        System.out.println("Faltas: " + faltas);
        System.out.printf("Valor descontado: %.2f \n", ((getSalariobase()/30)*faltas));
        System.out.printf("Salario liquido: %.2f \n", salarioLiquido());
        System.out.println("");
    }
    
    
}
