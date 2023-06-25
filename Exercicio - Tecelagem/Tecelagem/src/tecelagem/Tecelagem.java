 /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package tecelagem;

/**
 *
 * @author 0040482121003
 */
public class Tecelagem {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Administrador adm1 = new Administrador("rg-1", "adm-1", 10000);
        //adm1.hollerith();
        adm1.registrarFalta();
        //adm1.hollerith();
        adm1.novoMes();
        //adm1.hollerith();   
        
        Produtor pro1 = new Produtor("rg-2", "pro-1", 50);
        //pro1.hollerith();
        pro1.registrarHorasDiurnas(100);
        pro1.registrarHorasNoturnas(100);
        //pro1.hollerith();
        pro1.novoMes();
        //pro1.hollerith();
              
        Vendedor ven1 = new Vendedor("rg-3", "vend-1", 1000);
        //ven1.hollerith();  
        ven1.registrarVenda(100000);
        //ven1.hollerith();
        //ven1.novoMes();
        //ven1.hollerith();
        
        // Código modificado : 16/05/23 - exercicio de array de objetos
        Lista lista = new Lista(2);
        
        // DEIXAR AS EXCEÇÕES EM ORDEM, O "Exception" deve ser o ultimo pois ele é ancestral de todas exceções.
        /*
        try {
            lista.add(adm1);
            lista.add(pro1);
            lista.add(ven1); 
        } catch (ArrayIndexOutOfBoundsException exc) {
            System.out.println(exc);
        } catch (Exception exc) {
            exc.printStackTrace();
        }*/
        
        try {
            lista.add(adm1);
            lista.add(pro1);
            lista.add(ven1);
        } catch (Exception e) {
            System.out.println(e);
        }
        
       
        //lista.listagemVendas();
        //lista.registrarVenda(2, 2000);
        //lista.listagemVendas();
        
        lista.listagemAdm();
        lista.registrarFalta(0);
        lista.listagemAdm();
        
        lista.listagemProd();
        lista.registrarHorasDiurnas(1, 10);
        lista.registrarHorasNoturnas(1, 10);
        lista.listagemProd();
        
        adm1.hollerith();
        
        
    }   
}
