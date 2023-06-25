/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package autopecas;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author leosb
 */
public class Autopecas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Peca p1 = new Peca(1, 10, "Descricao da peca 1", 10.0);
        Peca p2 = new Peca(2, 20, "Descricao da peca 2", 20.0);
        Peca p3 = new Peca(3, 30, "Descricao da peca 3", 30.0);
        
        Lista lista1 = new Lista(3);
        
        // Testando adicionarPeca
        try {
            lista1.adicionarPeca(p1);
            lista1.adicionarPeca(p2);
            lista1.adicionarPeca(p3);
        } catch (Exception ex) {
            System.out.println("Exception: " + ex + "\n");
        }
        //lista1.relatorioGeral();
        
        // Testando retirarUnidades
        try {
            lista1.retirarUnidades(0, 10);
            lista1.retirarUnidades(1, 20);
            lista1.retirarUnidades(2, 30);
        } catch (IndexInvalido ex1) {
            System.out.println(ex1 + "\n");
        } catch (Exception ex2) {
            System.out.println("Exception: " + ex2 + "\n");
        }
        //lista1.relatorioGeral();
        
        // Testando acrescentarUnidades
        try {
            lista1.acrescentarUnidades(0, 10);
            lista1.acrescentarUnidades(1, 20);
            lista1.acrescentarUnidades(2, 30);
        } catch (IndexInvalido ex1) {
            System.out.println(ex1 + "\n");
        } catch (Exception ex2) {
            System.out.println("Exception: " + ex2 + "\n");
        }
        //lista1.relatorioGeral();
        
        // Testando imprimirPeca
        /*
        try {
            lista1.imprimirPeca(0);
            lista1.imprimirPeca(1);
            lista1.imprimirPeca(2);
        } catch (IndexInvalido ex1) {
            System.out.println(ex1 + "\n");
        } catch (Exception ex2) {
            System.out.println("Exception: " + ex2 + "\n");
        }*/
        
        // Testando relatorioReposicao
        lista1.relatorioReposicao(20);
        
    }
    
}
