/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package biblioteca;

/**
 *
 * @author 0040482121003
 */
public class Periodico extends Publicacao {
    
    private int numero_volume;
    
    public Periodico(String titulo, int qtd_copias_total, int numero_volume) {
        super(titulo, qtd_copias_total);
        this.numero_volume = numero_volume;
    }
    
    @Override
    public void imprimir() {
        super.imprimir();
        System.out.printf("Numero volume : %d \n\n", numero_volume);
    }
    
}
