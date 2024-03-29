# The basics

## CICLO INICIAL

O primeiro arquivo executado é o 'main.ts' e nele consta uma instrução '.bootstrapModule(AppModule)' que informa que devemos esse AppModule

No arquivo 'app.module.ts' temos algunas declarações e uma notação @NgModule que apararentemente declara a classe com nome de AppModule,  dentro dessa classe temos uma declaração e um bootstrap referenciando ao 'AppComponent'

Esse AppComponent por sua vez é declarado no arquivo 'app.component.ts'. Nele temos a notação @Component com algumas declarações, sendo a importante o seletor com nome de 'app-root', o template referenciando arquivo HTML e styles o CSS.


Dado isso, o Angular já identificou onde está localizado o componente, e no arquivo de template principal, o 'index.html' da página que será renderizada, temos a tag '<app-root></app-root>' que é o seletor definido naquele componente. A esse ponto, o Angular substitui o conteudo desse selector pelo template que o componente indicou.

## CONSTRUCTOR

É executado no tempo em que o componente é criado pelo angular.

## DATABINDING

Comunicação entre o código typescript com o template html

### String Interpolation
> {{ data }}

Onde data é um typescript expression. Pode ser uma propriedade de classe ou então uma função que retorna um valor que pode ser escrito como string.

### Property Binding
> [property] = "data"

exemplo a propriedade disabled de um elemento html ser ligada a uma variavel booleana

### Event Binding
> <buttom (click)="onClickDoSomething()">

>$event 
Essa expressão nos da acesso ao dado que é passado pelo evento 

### Two-Way-Binding

Combina as duas formas, property e event binding. 
> [(ngModel)]

Combina [] da propriedade e () do event, juntamente com uma diretiva do angular 'ngModel'

## DIRECTIVES

São instruções para a DOM.

> *ngIf="condição"

Essa diretiva por exemplo possui o * para indicar que é uma diretiva de altera a DOM

> [ngStyle]="{'background-color': backgroundColor}"

Permite alterar o estilo de um elemento

> [ngClass]="{'btn-success': isSuccess, 'btn-danger': !isSuccess}

Permite aplicar classes a um elemento com base em um condição