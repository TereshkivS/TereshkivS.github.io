'use strict';

;let Citation = (function(){
	function shuffle(a) {
	    for (let i = a.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [a[i], a[j]] = [a[j], a[i]];
	    }
	    return a;
	}
	return new class{
		constructor(){
			/* list of all lecturer information */
			this.lecturers = [
{id: 0, name: {first: '���������', second: '�����', third: '����������'}, name_full: '����� ��������� ����������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%86%D0%BB%D1%8C%D0%BA%D1%96%D0%B2_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/e/e6/Ilkiv1.jpg/200px-Ilkiv1.jpg'},
{id: 1, name: {first: '�������', second: '�����������', third: '����������'}, name_full: '����������� ������� ����������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/1/16/Baranetsky2.jpg/200px-Baranetsky2.jpg'},
{id: 2, name: {first: '���������', second: '����', third: '����������'}, name_full: '���� ��������� ����������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A8%D0%BF%D0%B0%D0%BA_%D0%97%D0%BE%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%B0_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%96%D0%B2%D0%BD%D0%B0', photo: 'http://wiki.lp.edu.ua/wiki/images/6/68/Shpak.jpg'},
{id: 3, name: {first: '�������', second: '�����', third: '���������'}, name_full: '����� ������� ���������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%9E%D0%B1%D1%88%D1%82%D0%B0_%D0%90%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D1%96%D0%B9_%D0%A4%D0%B5%D0%BB%D1%96%D0%BA%D1%81%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/9/93/Obshta.jpg'},
{id: 4, name: {first: '���', second: '������', third: '³��������'}, name_full: '������ ��� ³��������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A6%D0%B8%D0%BC%D0%B1%D0%B0%D0%BB_%D0%AE%D1%80%D1%96%D0%B9_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/f/f5/Tsymbal_01.jpg'},
{id: 5, name: {first: '��������', second: '������', third: '����������'}, name_full: '������ �������� ����������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%91%D0%B5%D0%B3%D0%BE%D1%82%D0%B0_%D0%A0%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/d/d0/4.jpg'},
{id: 6, name: {first: '����', second: '�������', third: '�������������'}, name_full: '������� ���� �������������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%9A%D0%B0%D1%80%D1%96%D0%B2%D0%B5%D1%86%D1%8C_%D0%86%D0%B3%D0%BE%D1%80_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/thumb/a/a7/DSC01693.JPG/200px-DSC01693.JPG'},
{id: 7, name: {first: '�������', second: '����������', third: '��������'}, name_full: '���������� ������� ��������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A1%D0%BA%D1%83%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%AE%D0%BB%D1%96%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/2/29/RTEmagicC_skulskyy_01.jpg.jpg'},
{id: 8, name: {first: '����', second: 'г����', third: '��������'}, name_full: 'г���� ���� ��������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%A0%D1%96%D0%B7%D0%BD%D0%B8%D0%BA_%D0%9E%D0%BB%D0%B5%D0%B3_%D0%AF%D1%80%D0%B5%D0%BC%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/6/62/11.jpg'},
{id: 9, name: {first: '������', second: '������', third: '���������'}, name_full: '������ ������ ���������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%97%D0%B5%D1%80%D0%B1%D1%96%D0%BD%D0%BE_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/3/3f/Zerbino_01.jpg'},
{id:10, name: {first: '������', second: '������', third: '��������'}, name_full: '������ ������ ��������', wiki: 'http://wiki.lp.edu.ua/wiki/%D0%94%D0%B5%D0%BC%D0%B8%D0%B4%D0%B0_%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%90%D0%B4%D0%B0%D0%BC%D0%BE%D0%B2%D0%B8%D1%87', photo: 'http://wiki.lp.edu.ua/wiki/images/e/eb/Demyda_1.jpg'},
{id:11, name: {first: '�����', second: '����', third: '��������'}, name_full: '���� ����� ��������', wiki: '', photo: 'http://studvoice.com/uploads/posts/2017-11/thumbs/1510920401_fabry.png'},
			];
			/* list of all lecturer citations */
			this.citations = [
{lecturer_id: 0, text: '����� �������� ����� ������ �����.', explanation: ''},
{lecturer_id: 0, text: '��� ���� �� �� �������� ������ �����.', explanation: ''},
{lecturer_id: 0, text: '������� � ����� �����.', explanation: ''},
{lecturer_id: 0, text: '� ����, �� ��� ��� ���� ������� ���� ��������.', explanation: ''},
{lecturer_id: 0, text: '�� ������ ���� �������, ��� ������ ������������.', explanation: ''},
{lecturer_id: 0, text: '���� �� ����� � ����� ���� � �������� �����, �� ���� � ��� �������.', explanation: ''},
{lecturer_id: 0, text: '�������� ��� �����.', explanation: ''},
{lecturer_id: 0, text: '�������� ��� ������.', explanation: ''},
{lecturer_id: 0, text: '�� ������ � �������� ������ ��������� � �������. ��� � ����� ������������ ��������.', explanation: ''},
{lecturer_id: 0, text: '��� ����������� �� ��� ����.', explanation: '����i���� ����������� ����� �� �������������i���: L(x1, x2, x3) = 4x 2 1 + 2x1x2 + 6x1x3 + 2x 2 2 + 3x 2 3 .'},
{lecturer_id: 0, text: '������, �� �� ��� ������������?', explanation: ''},
{lecturer_id: 0, text: '� ����� ��� �� � �������� �������.', explanation: ''},
{lecturer_id: 0, text: '�� ������ �� ����� �� ... �� ��� ��������.', explanation: ''},
{lecturer_id: 0, text: '������������ ��� ��� ��������� ���.', explanation: ''},
{lecturer_id: 0, text: '- ������� ������� �� �� ����?\n- ������ �������.', explanation: ''},
{lecturer_id: 0, text: '� ��� ���� ����� �� �����. ���� ����� 璿�� ������.', explanation: ''},
{lecturer_id: 0, text: '��� ���� �� ���� ��� ���������?', explanation: ''},
{lecturer_id: 0, text: '������, �� ���������� �� ���������.', explanation: ''},
{lecturer_id: 0, text: '��������, � ���.', explanation: ''},
{lecturer_id: 0, text: 'ʳ���� ����� ���������� ����������. ���� ��������� �� ����� � ��������.', explanation: ''},
{lecturer_id: 0, text: '������ �� ����� ����� � ����� ��������...', explanation: ''},
{lecturer_id: 0, text: '���� ��������� � ��������.', explanation: ''},
{lecturer_id: 0, text: '- ����� ������� ����������?\n- ͳ!', explanation: ''},
{lecturer_id: 0, text: '��������� �� ���������� ������� �����.', explanation: ''},
{lecturer_id: 0, text: '�� ������� ... �� ��� ... ������ �������� �������.', explanation: ''},
{lecturer_id: 0, text: '��� ������ ������� �� �� �� ���� ���������.', explanation: ''},
{lecturer_id: 0, text: '�������, ��� ��� ������ ������ � ���� �����. ³� ��� ��� �����?', explanation: ''},
{lecturer_id: 0, text: '���� ����� �������� ������, ������ �����.', explanation: ''},
{lecturer_id: 0, text: '���, ��� ��� ����� ����� ����� ����� �� �� ������ �� �������?', explanation: ''},
{lecturer_id: 0, text: '���� �� �� ��� ���� ����?', explanation: '�� ��� �������� �� � ������ ������.'},
{lecturer_id: 0, text: '- ����� �������?\n- ͺ!', explanation: ''},
{lecturer_id: 0, text: '� �� �� ��� � ����� �������.', explanation: '�� ��� ��������, ����� ������� � ���� �� ������� �� ��� ������'},
{lecturer_id: 0, text: '³� ���� ���� ������ ��� ����������.', explanation: ''},
{lecturer_id: 1, text: '���� �� 24 ������. ����� ���� ����.', explanation: ''},
{lecturer_id: 1, text: '��� ������ �� �����, ��� ������� ��� ����������� ���� � �����.', explanation: ''},
{lecturer_id: 8, text: '�������� ����� � ��� �����.', explanation: ''},
{lecturer_id: 1, text: '���� ��� ������� ������...', explanation: '��� ��������, ���� ����������.'},
{lecturer_id: 1, text: '� ���� ���� ����� ������� ������.', explanation: ''},
{lecturer_id: 1, text: '�������� � �����, �� ���� ������ �� ������.', explanation: '������� ���������� �� ���'},
{lecturer_id: 1, text: '�� ����������, � � ��������� �� ����� ���������� �� ������.', explanation: ''},
{lecturer_id: 1, text: '���� � ���� ����� ���� � ������ ���.', explanation: '��� ����������� ���������� ���������� ������� ���������.'},
{lecturer_id: 1, text: '�� �������� 򳺿 ��������, ���� �� ������� �����.', explanation: ''},
{lecturer_id: 1, text: '��������� ������ ���� ���������� ������.', explanation: ''},
{lecturer_id: 1, text: '���� ��� ��������� ������������.', explanation: '�� ��� �������.'},
{lecturer_id: 1, text: '���� �� �� �� ��� ����� 璿��, �� ������ � ������.', explanation: ''},
{lecturer_id: 1, text: '��������� ����� � ����� �������.', explanation: ''},
{lecturer_id: 2, text: '��� �� ������� ������ �� ��� �����.', explanation: '��������� �� ��������� ������� � ������'},
{lecturer_id: 2, text: '��� ����� ��, ��� ����� ����.', explanation: ''},
{lecturer_id: 2, text: '������ �����, ���� �� �� �������.', explanation: 'ʳ������ ������� ������.'},
{lecturer_id: 2, text: '����� ���.', explanation: '����.'},
{lecturer_id: 0, text: '��������� ������� �� ���� �����.', explanation: '��� �������� �� � ������'},
{lecturer_id: 0, text: '������ - ������ �����.', explanation: ''},
{lecturer_id: 0, text: '���� � ����� ��������, �� �������������� �� ������� ���, �� �� ��������� �� ����.', explanation: ''},
{lecturer_id: 0, text: '- ���� �� ������ ����������� �������, ���� � ��� ���� �����?\n- � ���� ������� �� �� ����.', explanation: ''},
{lecturer_id: 0, text: '- ��������, �� �� ��� �����������?\n- ���.�������.\n- � �����, ����������� �����.', explanation: ''},
{lecturer_id: 0, text: '�������, �� �� �������� ����������?', explanation: ''},
{lecturer_id: 0, text: '�� ������� ���� ��������� ����� � ��������� IQ.', explanation: ''},
{lecturer_id: 0, text: '��� ���� �������� ������, �� ����� �� ����. ����� ����� �����.', explanation: ''},
{lecturer_id: 0, text: '�������� � ��������, �� � ���� ����? ���� ������.', explanation: ''},
{lecturer_id: 0, text: '�������� ������ �� ������ ����.', explanation: ''},
{lecturer_id: 3, text: '��� �� ���� �������� - �� ���������!', explanation: ''},
{lecturer_id: 4, text: '���� �� �� ������ ���� ������, �� ����� �������� ��� �� �.', explanation: ''},
{lecturer_id: 4, text: '�� �� - ������� ����������.', explanation: ''},
{lecturer_id: 4, text: '��� ��������� ����� �����, � ������� �� ����.', explanation: ''},
{lecturer_id: 4, text: 'ϳ��� ��� ���� � ������ ���������� � ���� �������.', explanation: ''},
{lecturer_id: 7, text: '����� �������. �� �������� ��� �� ������ - �� ����������.', explanation: ''},
{lecturer_id: 6, text: '�� ������, � � - hunter.', explanation: ''},
{lecturer_id: 6, text: '��� �� ������� ������, � ���� �� ���� ���� ��� ����.', explanation: ''},
{lecturer_id:10, text: '��������� ��� ����� � �������� �� ����.', explanation: ''},
{lecturer_id:10, text: '³� JS �� Java ���� ����.', explanation: ''},
{lecturer_id:11, text: '�������� ����� ������������.', explanation: ''},
{lecturer_id: 5, text: '����� ������ �����, � �� ����, �� �������� ������� ��������� ����.', explanation: ''},
{lecturer_id: 5, text: '���� ������ ����� ����������� ������.', explanation: ''},
{lecturer_id: 5, text: '- ����-����, �� ����� � ���� �������� ������ �������?\n- ͳ, �� ����.\n- 900 ������� �� �������. ��� ����� �� �� ���������� � ��� �� ������ �� ��������.', explanation: ''},
{lecturer_id: 1, text: '������� �� ��������, ��� � ������ ������ ���� ������ ����.', explanation: ''},
{lecturer_id: 9, text: '���� ������� ��� ��������.', explanation: ''},
{lecturer_id: 9, text: '�������, � ������ ��� �� �������� ��������.', explanation: ''},
{lecturer_id: 9, text: '���� � ���������� ��������� �������� �����. ���� �����.', explanation: ''},
{lecturer_id: 9, text: '����� � ���� �������� �������... ̳����.', explanation: ''},
{lecturer_id: 9, text: '������ ����, ����� �������.', explanation: ''},
{lecturer_id: 9, text: '��� � ������. ��� �� ������.', explanation: ''},
{lecturer_id: 9, text: '- ���� ����� �� � �����������?\n- �������?', explanation: ''},
{lecturer_id: 9, text: '- �� ����� ������� ������ �����?\n- �����, ���� ���������� �� ��������.', explanation: ''},
{lecturer_id: 9, text: 'Ƴ��� - ����� �� �������.', explanation: ''},
{lecturer_id: 9, text: '- ������ ���������, � ���� � �������.\n- �� � �������, ������� - ��� ��� ���������.', explanation: '����� ������� �� ������ ����� �� ���������.'},
{lecturer_id: 9, text: '�� ������ ������. �� �� ������ ������ ����� ������.', explanation: '��� ����� �����.'},
{lecturer_id: 9, text: '�� ������� ������� - ��������� ��������� �������.', explanation: ''},
{lecturer_id: 9, text: '��������. �� ��� ���� ����� �����?', explanation: ''},
{lecturer_id: 9, text: '�� ��� �������� ��� ���������?..', explanation: ''},
{lecturer_id: 9, text: '� ������ ������ ����� �����, �� �������� ����� � ������ �������.', explanation: ''},
{lecturer_id: 9, text: '- ������� �������.\n- �����. ��� ����.', explanation: ''},
{lecturer_id: 9, text: '- � �� �� � ������� ��-�������� �����������?\n- �� �� ��� ���.', explanation: ''},
{lecturer_id: 9, text: '�� �� ��� ����������, �� � ����� ��� �����.', explanation: ''},
{lecturer_id:10, text: '��� ����� WEB 2.0', explanation: ''},

			];

			/* template to be insertet into the page */
			this.template = 
`
<abbr title="{explanation}">
	<table class="citation">
		<tr>
			<td class="citation_txt">
				{citation}
			</td>
			<td class="citation_img" rowspan="2">
				<img src="{photo}">
			</td>
		</tr>
		<tr>
			<td class="citation_rights">&copy; {name}</td>
		</tr>
	</table>
</abbr>
`
		}

		/* returns a random citation */
		random(){
			let index = Math.random() * this.citations.length ^ 0;
			let citation = this.citations[index];
			citation.text = citation.text.replaceAll('\n', '<br>');
			return citation;
		}

		/* returns a citation by its id */
		get_citation(id){
			if (id >= this.citations.length){
				id = this.citations.length - 1;
			} 
			else if (id < 0){
				id = 0;
			}
			let citation = this.citations[id];
			citation.text = citation.text.replaceAll('\n', '<br>');
			return citation;
		}

		/* shuffles all of the citations and returns the new array */
		get_all_citations(){
			let citations = this.citations.slice();
			shuffle(citations);

			return citations;
		}

		/* returns a lecturer by his id */
		get_lecturer(id){
			for (let i = 0; i < this.lecturers.length; i++){
				if (this.lecturers[i].id == id){
					return this.lecturers[i];
				}
			}
		}

		/* receives a citation, parses it and returns */
		/* it as a string that can be inserted in html */
		to_string(citation){

			let lecturer = this.get_lecturer(citation.lecturer_id);
			/* fill the template */
			let block = this.template.format({
				name: lecturer.name.second, 
				citation: citation.text.replaceAll('\n', '<br>'), 
				photo: lecturer.photo,
				explanation: citation.explanation || '*��� ���������*'
			});
			return block;
		}
	};
})();

/* 
	changes the string:

	input:
	  "Hello {name}!".format({name: "John"})

	output:
	  "Hello John!"
 */
String.prototype.format = function(args) {
  let a = this;
  for (let k in args) {
    a = a.replace("{" + k + "}", args[k])
  }
  return a
};

/*
	finds all instances in string and replaces them

	input:
	  "My name is John".replaceAll('n', 'p')

	output:
	  "My pame is Johp"
*/
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};