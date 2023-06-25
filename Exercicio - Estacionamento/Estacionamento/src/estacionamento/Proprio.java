/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package estacionamento;

import java.util.Objects;

/**
 *
 * @author 0040482121003
 */
public class Proprio extends Carro {

    private double valorCompra;
    private String dataCompra;
    
    // GETTERS E SETTERS
    public double getValorCompra() {
        return valorCompra;
    }
    public void setValorCompra(double valorCompra) {
        this.valorCompra = valorCompra;
    }

    public String getDataCompra() {
        return dataCompra;
    }
    public void setDataCompra(String dataCompra) {
        this.dataCompra = dataCompra;
    }
    
    // Construtor
    public Proprio(String placa, int anoFabricacao, String modelo, double valorCompra, String dataCompra) {
        super(placa, anoFabricacao, modelo);
        this.valorCompra = valorCompra;
        this.dataCompra = dataCompra;
    }
   
    // Métodos
    @Override
    public boolean oferta(double valor) {
        return (valor >= (valorCompra * 1.1));
    }
   
    @Override
    public void imprimeDados() {
        super.imprimeDados();
        System.out.println("Valor de Compra: " + valorCompra);
        System.out.println("Data de compra: " + dataCompra);
        System.out.println("");
    }

    @Override
    public String toString() {
        return super.toString() + "Proprio{" + "valorCompra=" + valorCompra + ", dataCompra=" + dataCompra + '}';
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 71 * hash + (int) (Double.doubleToLongBits(this.valorCompra) ^ (Double.doubleToLongBits(this.valorCompra) >>> 32));
        hash = 71 * hash + Objects.hashCode(this.dataCompra);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        
        if (!super.equals(obj)) {
            return false;
        }
         
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Proprio other = (Proprio) obj;
        if (Double.doubleToLongBits(this.valorCompra) != Double.doubleToLongBits(other.valorCompra)) {
            return false;
        }
        return Objects.equals(this.dataCompra, other.dataCompra);
    }
}
