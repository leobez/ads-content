/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package biblioteca;

/**
 *
 * @author 0040482121003
 */
public class Tecnico extends Livro {
    
    private boolean reserva;

    public Tecnico(String titulo, int qtd_copias_total, String nome_autor) {
        super(titulo, qtd_copias_total, nome_autor);
        reserva = false;
    }
   
    @Override
    public boolean emprestar() {
        if (!disponivel()) {
            return false;
        }
        
        if (reserva) {
            return false;
        }
        
        qtd_copias_disponivel--;
        return true;  
    }
    
    // Métodos
    public void reservar() {
        reserva = true;
    }
    
    public void liberar() {
        reserva = false;
    }
    
 
}
