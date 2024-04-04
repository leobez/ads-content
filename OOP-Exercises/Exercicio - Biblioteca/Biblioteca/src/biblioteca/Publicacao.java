/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package biblioteca;

/**
 *
 * @author 0040482121003
 */
public abstract class Publicacao {
    
    private String titulo;
    protected int qtd_copias_total, qtd_copias_disponivel;

    public Publicacao(String titulo, int qtd_copias_total) {
        this.titulo = titulo;
        this.qtd_copias_total = qtd_copias_total;
        qtd_copias_disponivel = qtd_copias_total;
    }
    
    // MÉTODOS
    public void imprimir(){
        System.out.printf("Titulo : %s \n", titulo);
        System.out.printf("Quantidade total : %d \n", qtd_copias_total);
        System.out.printf("Quantidade disponivel : %d \n", qtd_copias_disponivel);
    }
    
    public boolean disponivel() {
        return qtd_copias_disponivel > 0;
    }
    
    public boolean consultar() {
        if (disponivel()) {
            qtd_copias_disponivel--;
            return true;
        }
        return false;
    }
    
    public boolean retornar() {
        if (qtd_copias_disponivel == qtd_copias_total) {
            return false;
        }
        qtd_copias_disponivel++;
        return true;
    }
}
