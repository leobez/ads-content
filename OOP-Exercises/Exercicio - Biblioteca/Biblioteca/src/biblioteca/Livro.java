/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package biblioteca;

/**
 *
 * @author 0040482121003
 */
public class Livro extends Publicacao {
    
    private String nome_autor;
    
    public Livro(String titulo, int qtd_copias_total, String nome_autor) {
        super(titulo, qtd_copias_total);
        this.nome_autor = nome_autor;
    }
    
    // Métodos
    public boolean emprestar() {
        if (!disponivel()) {
            return false;
        }
        qtd_copias_disponivel--;
        return true;
    }
    
    public boolean devolver() {
        if (qtd_copias_disponivel == qtd_copias_total) {
            return false;
        }
        qtd_copias_disponivel++;
        return true;
    }
    
    @Override
    public void imprimir() {
        super.imprimir();
        System.out.printf("Nome do autor : %s \n\n", nome_autor);
    }
    
}
