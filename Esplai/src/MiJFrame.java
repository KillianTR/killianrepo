import java.awt.Color;
import java.awt.Toolkit;

import javax.swing.JFrame;

public class MiJFrame extends JFrame {
	private static final long serialVersionUID = 1L;
	
	MiJFrame (int width, int height, boolean visible, boolean resizable, Color color) {
//		setSize(width, height);
//		setLocation(400,200);
		setVisible(visible);
		setResizable(resizable);
		setBounds(400, 400, 800, 600);
		getContentPane().setBackground(Color.LIGHT_GRAY);
		getContentPane().setBackground(new Color(5, 65, 90));
		setIconImage(Toolkit.getDefaultToolkit().getImage("./FundacioEsplai.png"));
	}
}
