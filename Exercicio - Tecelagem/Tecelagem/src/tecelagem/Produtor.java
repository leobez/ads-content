/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class Produtor extends Funcionario {
    
    private int horasDiurnas, horasNoturnas;
    
    public Produtor(String rg, String nome, double salariobase) {
        super(rg, nome, salariobase);
        horasDiurnas = 0;
        horasNoturnas = 0;
    }
    
    // Tambem pode ser feito separando os métodos e usando pra calcular depois.
    private double valorDiurno() {
        return getSalariobase() * horasDiurnas;
    }
    private double valorNoturno() {
        return getSalariobase() * horasNoturnas * 1.3;
    }
    
    @Override
    public double salarioLiquido() {
        return valorDiurno() + valorNoturno();
    }

    @Override
    public void novoMes() {
        horasDiurnas=0;
        horasNoturnas=0;
    }
 
    public void registrarHorasDiurnas(int horas) {
        horasDiurnas+=horas;
    }
    
    public void registrarHorasNoturnas(int horas) {
        horasNoturnas+=horas;
    }
    
    @Override
    public void hollerith() {
        super.hollerith();
        System.out.println("Horas Diurnas: " + horasDiurnas);
        System.out.printf("Valor Diurno: %.2f \n" , valorDiurno());

        System.out.println("Horas Noturnas: " + horasNoturnas);
        System.out.printf("Valor Noturno: %.2f \n" , valorNoturno());

        System.out.printf("Salario liquido: %.2f \n" , salarioLiquido());
        System.out.println("");
    }
    
}
